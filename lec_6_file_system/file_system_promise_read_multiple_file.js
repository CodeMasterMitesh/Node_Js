const fileSystem = require('fs').promises;

const path = require('path');

// const filePath = path.join(__dirname,file);

fileSystem.readdir(__dirname).then((files)=>{
    // console.log(`files : \n${files}`);
    for(file of files){
        // console.log(file);
        if(file.endsWith(".txt")){
            const filePath = path.join(__dirname,file);
            // console.log(filePath);
            fileSystem.readFile(filePath,"utf-8").then((data)=>{
                console.log(`All File Data :\n${data}`);
            })
            .catch((err)=>{
                console.error(err);
            })
        }
    }
    
})
.catch((err)=>{
    console.error(err);
})