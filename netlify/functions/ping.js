// netlify/functions/ping.js
module.exports.handler = async function () {
  return { statusCode: 200, body: "pong" };
};
