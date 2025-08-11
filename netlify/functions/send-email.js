// netlify/functions/send-email.js
const fetch = global.fetch || ((...a) => import('node-fetch').then(({default:f}) => f(...a)));
const RESEND_URL = 'https://api.resend.com/emails';
const FROM = 'Signature Fencing <noreply@signaturefencingproducts.com>';
const TO = 'signaturefencingproducts@gmail.com';
const ALLOW_ORIGIN = process.env.CONTEXT === 'dev' ? '*' : 'https://signaturefencingproducts.com';

module.exports.handler = async (event) => {
  const cors = {
    'Access-Control-Allow-Origin': ALLOW_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers: cors, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers: cors, body: 'Method Not Allowed' };

  try {
    const { subject, html, reply_to } = JSON.parse(event.body || '{}');
    if (!subject || !html) {
      return { statusCode: 400, headers: cors, body: 'Missing required fields.' };
    }

    // basic sanity: require a plausible email if provided
    const rt = (reply_to && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(reply_to)) ? reply_to : undefined;

    const resp = await fetch(RESEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        subject,
        html,
        ...(rt ? { reply_to: rt } : {}),
        ...(rt ? { headers: { 'Reply-To': rt } } : {}), // <- add explicit header too
      }),
    });

    const data = await resp.json();
    return {
      statusCode: resp.ok ? 200 : resp.status,
      headers: { ...cors, 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error('send-email error:', err);
    return { statusCode: 500, headers: cors, body: `Server error: ${err.message}` };
  }
};
