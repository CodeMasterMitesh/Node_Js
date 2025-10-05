const http = require('http');
const path = require('path');
const fs = require('fs');

const pages = ["index","about","service","contactus"];
// console.lo
    // console.log(ele);
    // console.log(filePath);
    const server = http.createServer((req,res)=>{
        let pageName = req.url.replace('/', '') || 'index';
        console.log(pageName);
        if(pages.includes(pageName)){
            const filePath = path.join(__dirname,`${pageName}.html`);
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
            
        }
        
        
    });

    const PORT = 3000;

    server.listen(PORT,()=>{
        console.log(`Server Start http://localhost:${PORT}`);
    });

