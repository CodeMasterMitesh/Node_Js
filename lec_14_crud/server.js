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
            // console.log(data);
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
            // console.log(req.url);
        }else if (req.url === '/style.css') {
            const css = await readFile(path.join(__dirname,"public","style.css"), 'utf-8');
            // console.log(data);
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(css);
        }else if (req.url === '/login') {
            const data = await readFile(path.join(__dirname,"public","login.html"), 'utf-8');
            // console.log(data);
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        }
    } 

    if(req.method === "POST" && req.url === '/studentRegData'){
        let body = '';
        req.on('data',(chunk)=>{
            body+=chunk;
            console.log(body);
            const adata = new URLSearchParams(body);
            const urlData = Object.fromEntries(adata);
            // console.log(urlData);
            res.writeHead(200, { 'content-type': 'text/html' });
            
            res.write(`<table border='1'>
                <tr>
                    <th colspan='2'>Student Data</th>
                </tr>
                <tr>
                    <th>First Name:<th>
                    <th>${urlData.firstname}</th>
                </tr>
                <tr>
                    <th>Last Name:<th>
                    <th>${urlData.lastname}</th>
                </tr>
                <tr>
                    <th>Email:<th>
                    <th>${urlData.email}</th>
                </tr>
                <tr>
                    <th>Address:<th>
                    <th>${urlData.address}</th>
                </tr>
                <tr>
                    <th>Mobile:<th>
                    <th>${urlData.mobile}</th>
                </tr>
                <tr>
                    <th>Education:<th>
                    <th>${urlData.education}</th>
                </tr>
                
                `);
            res.end();
        });
       
    }

});

server.listen(PORT, () => {
    console.log(`Server Running On http://localhost:${PORT}`);
});