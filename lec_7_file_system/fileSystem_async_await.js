const fileSystem = require('fs');
const path = require('path');


const file = "products.json";
const filePath = path.join(__dirname,file);

const products = {
    name : "Samsung Mobile S Pro",
    price : 25000,
    modelYear : 2025,
}

// JSON -> JSON is global variable of node js and have some methods
// stringfy and parse

// using async and await store data in products.json file

// const  writePoductsFile = async ()=>{
//     try {

//         const res =  await fileSystem.promises.writeFile(filePath,JSON.stringify(products,null,2),"utf-8");
//         console.log(res);
//         console.log("Data Stored");

//     } catch (error) {
//         console.error(error);
//     }

// }

// writePoductsFile();

// const readProductData = async ()=>{

//     try {

//         const res = await fileSystem.promises.readFile(filePath,"utf-8");
//         console.log(res);
        
//         const content = JSON.parse(res);
        
//         console.log(content);

//         console.log("!!**********Product Data**********!!");
//         console.log(`Product Name is : ${content.name}`);
//         console.log(`Product Price is : ${content.price}`);
//         console.log(`Product Model Year is : ${content.modelYear}`);
//         console.log("!!**********END**********!!");

//     } catch (error) {
//         console.log(error);
//     }

// }

// readProductData();

const newProduct = {
    name : "Apple 17 Pro",
    price : 5000,
    modelYear : 2025,
}

const appendProductData = async () =>{
    try {

        const res =  await fileSystem.promises.appendFile(filePath,JSON.stringify(newProduct,null,2),"utf-8");
        console.log(res);
        console.log("Data Append");

    } catch (error) {
        console.error(error);
    }

}   

appendProductData();