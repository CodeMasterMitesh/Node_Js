const fileSystem = require('fs');
// console.log(fileSystem);
const path  = require('path');


const file = "employee.txt";

const filePath = path.join(__dirname,file);

// console.log(filePath);

const data = "Node Js Is Awesome";

// let p = fileSystem.promises.writeFile(filePath,data,"utf-8").then(()=>{
//     console.log("Data Stored");
// })
// .catch((err)=>{
//     console.error(err);
// });

// console.log(p);

// fileSystem.promises.readFile(filePath,"utf-8").then((readData)=>{
//     console.log(readData);
// })
// .catch((err)=>{
//     console.error(err);
// })

const newData = "\nTopic Is File System";


// fileSystem.promises.appendFile(filePath,newData,"utf-8").then(()=>{
//     console.log("Data Append");
// })
// .catch((err)=>{
//     console.error(err);
// });

// fileSystem.promises.readFile(filePath,"utf-8").then((readData)=>{
//     console.log(readData);
// })
// .catch((err)=>{
//     console.error(err);
// });

// fileSystem.promises.unlink(filePath).then(()=>{
//     console.log("File Deleted");
// })
// .catch((err)=>{
//     console.error(err);
// });

// promise chain 

