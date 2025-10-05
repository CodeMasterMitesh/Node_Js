const http = require('http');
const path = require('path');
const fs = require('fs');

// const pages = ["index","about","service","contactus"];
// console.log(pages[0]);
const filePath = path.join(__dirname,"index.html");
const aboutpage = path.join(__dirname,"about.html");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        fs.readFile(filePath,(err,data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"});
                // res.write(err);
                res.end(err);
            }else{
                res.writeHead(200,{"content-type":"text/html"});
                // res.write(data);
                res.end(data);
            }
        })
    }else if(req.url == "/about"){
        fs.readFile(aboutpage,(err,data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"});
                // res.write(err);
                res.end(err);
            }else{
                res.writeHead(200,{"content-type":"text/html"});
                // res.write(data);
                res.end(data);
            }
        })
    }else{
        res.writeHead(404,{"content-type":"text/plain"});
        // res.write("No Page Found");
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Server Start http://localhost:${PORT}`);
})