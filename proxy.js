const http = require('http');

const PORT = process.env.PORT || 3001;

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    });
    res.end();
    return;
  }

  if (req.method !== 'POST' || req.url !== '/api/chat') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found. Use POST /api/chat' }));
    return;
  }

  if (!OPENROUTER_API_KEY) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'OPENROUTER_API_KEY environment variable not set' }));
    return;
  }

  let body = '';
  req.on('data', chunk => { body += chunk.toString(); });
  req.on('end', () => {
    fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://traekiro-workshop.vercel.app',
        'X-Title': 'aiHackathon 2026 Workshop',
      },
      body: body,
    })
      .then(resp => resp.json())
      .then(data => {
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        });
        res.end(JSON.stringify(data));
      })
      .catch(err => {
        res.writeHead(502, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        });
        res.end(JSON.stringify({ error: `Upstream error: ${err.message}` }));
      });
  });
});

server.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
  console.log(`Endpoint: POST http://localhost:${PORT}/api/chat`);
  console.log(`OPENROUTER_API_KEY set: ${OPENROUTER_API_KEY ? 'yes' : 'no'}`);
});
