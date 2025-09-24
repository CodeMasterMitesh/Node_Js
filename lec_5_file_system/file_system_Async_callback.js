const fileSystem = require('fs');
// console.log(fileSystem);
const path  = require('path');


const file = "employee.txt";

const filePath = path.join(__dirname,file);

// console.log(filePath);

const data = "Good Morning, Students.";

// fileSystem.writeFile(filePath,data,"utf-8",()=>{
//     console.log("Data Stored");
// });

// fileSystem.readFile(filePath,"utf-8",(err,readData)=>{
//     if(err){
//         console.error(err);
//     }
//     console.log(readData);
// });

// const newData = "\nToday is Holiday";

// fileSystem.appendFile(filePath,newData,"utf-8",()=>{
//     console.log("Data Append");
// });

// fileSystem.readFile(filePath,"utf-8",(err,readData)=>{
//     if(err){
//         console.error(err);
//     }
//     console.log(readData);
// });

// fileSystem.unlink(filePath,()=>{
//     console.log("File Deleted");
// });