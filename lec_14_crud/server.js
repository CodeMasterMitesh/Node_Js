import { createServer } from 'http';
import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { URLSearchParams } from 'url';

const PORT = 5500;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__dirname);
const indexPage = path.join(__dirname, "public", 'index.html');
// const cssFile = path.join(__dirname, "public", 'style.css');
// console.log(cssFile);

const server = createServer(async (req, res) => {

    if (req.method === 'GET') {
        if (req.url === '/') {
            const data = await readFile(indexPage, 'utf-8');
            console.log(data);
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
            // console.log(req.url);
        }
    } else if (req.method === 'GET' && req.url === 'style.css') {
        const data = await readFile(path.join(__dirname,"public","style.css"), 'utf-8');
        console.log(data);
        res.writeHead(200, { 'content-type': 'text/css' });
        res.end(data);
    }

});

server.listen(PORT, () => {
    console.log(`Server Running On http://localhost:${PORT}`);
});