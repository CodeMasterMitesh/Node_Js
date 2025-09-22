const fileSystem = require('fs');
const path = require('path');

// console.log(fileSystem);

const file = "data.txt";

const filePath = path.join(__dirname,file);
console.log(filePath);

// WRITE FILE
fileSystem.writeFileSync(filePath,"Hello Students. Enjoy Navratri Today","utf-8");

console.log("Data Stored successfully");

// READ FILE
// const readData = fileSystem.readFileSync(filePath,"utf-8");

// console.log(readData);

// FILE APPEND
// const newMsg = "\nHello Students. Today First Day Of Navratri. Enjoy😁"

// fileSystem.appendFileSync(filePath,newMsg,"utf-8");

// console.log("Data Append.");


// FILE READ

// const readNewData = fileSystem.readFileSync(filePath,"utf-8");
// console.log(readNewData);


// fileSystem.unlinkSync(filePath);
// console.log("File Delete Successfully");