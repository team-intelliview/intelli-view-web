import { createServer } from 'https';
import { parse } from 'url';
import next from 'next';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { IncomingMessage, ServerResponse } from 'http';

// ESM 환경에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'cert/localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert/localhost.pem')),
};

app.prepare().then(() => {
  const server = createServer(
    httpsOptions,
    (req: IncomingMessage, res: ServerResponse) => {
      const parsedUrl = parse(req.url || '', true);
      handle(req, res, parsedUrl);
    },
  );

  server.listen(3000, () => {
    console.log('https://jeongag.ummdev.com:3000');
  });

  server.on('error', (err) => {
    console.error('Server Error:', err);
  });
});
