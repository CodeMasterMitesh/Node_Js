const fileSystem = require('fs').promises;

const path = require('path');

const file  = "employee.tx";

const filePath = path.join(__dirname,file);

const data = "Lalit Patel";

fileSystem.writeFile(filePath,data,"utf-8").then(()=>{
    console.log("Data Store Successfully");

    return fileSystem.readFile(filePath,"utf-8");

})
.then((data)=>{

    console.log(`File Data : ${data}`);

    const newData = "\nMilan Patel";

    return fileSystem.appendFile(filePath,newData,"utf-8");
})
.then(()=>{

    console.log("Data Append");

    return fileSystem.readFile(filePath,"utf-8"); 
})
.then((data)=>{

    console.log(`New Data :\n${data}`);

    return fileSystem.unlink(filePath);
})
.then(()=>{
    console.log("File Deleted");
})
.catch((err)=>{
    console.error(err);
})