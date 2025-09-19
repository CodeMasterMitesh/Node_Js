const path = require('path');

// console.log(path);

// hr/employee/employee.js

// console.log(path.join("hr","employee","employee.js"));

// console.log(__dirname); // current return current directory
// console.log(__filename); // current return current file

const fileAddress = path.join("hr","employee","employee.js");
// console.log(fileAddress);

// console.log();
// const png = path.extname("abc.xyz");
// console.log(png);
// if(png == ".png"){
//     console.log("Png File");
// }else{
//     console.log("Wrong File Extention");
// }
// console.log(path.parse(fileAddress));
// console.log(path.dirname(fileAddress));
// console.log(path.basename(fileAddress));
// console.log(path.resolve(fileAddress));
// console.log(path.relative(__dirname,'../lec_1/lec_1_calculation.js'));