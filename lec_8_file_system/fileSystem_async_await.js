const fileSystem = require('fs');
const path = require('path');


const file = "products1.json";
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

// const newProduct = {
//     name : "Nokia 360",
//     price : 3000,
//     modelYear : 2022,
// }

const newProduct1 = {
    name : "Nothing",
    price : 3000,
    modelYear : 2025,
}
const appendProductData = async (product) =>{
    try {

        let data = [];

        if(fileSystem.existsSync(filePath)){

            const content = await fileSystem.promises.readFile(filePath,"utf-8");
            // console.log(content);
            if(content.trim().length > 0){
    
            data = JSON.parse(content);
                // console.log(data);
                if(!Array.isArray(data)){
                    // console.log("Is Not Array");
                    data = [data];
                }
            }
        }

        data.push(product);
        const res =  await fileSystem.promises.writeFile(filePath,JSON.stringify(data,null,2),"utf-8");
        // console.log(res);
        console.log("Data Append");

    } catch (error) {
        console.error(error);
    }

};

// appendProductData(newProduct1);

const readAllProduts = async ()=>{
    try {

        if(fileSystem.existsSync(filePath)){
            const content = await fileSystem.promises.readFile(filePath,"utf-8");
            // console.log(content);
            if(content.trim().length === 0){
                console.log("File Have No Content");
                return;
            }
            let data = JSON.parse(content);
            if(!Array.isArray(data)){
                console.log("File Data Not Array.Convert To Array []");
                data = [data];
            }
            
            // console.log(data);
            // console.log("Products Data");

            data.forEach((product,index)=>{
                // console.log(product.name);
                console.log(`${index + 1} - ${product.name}-${product.price}-${product.modelYear}`);
            });

        }

    } catch (error) {
        console.error(error);
    }
};

const searchProduct = async (searchTeam)=>{
    try {
        
        
    } catch (error) {
        
    }
};
// readAllProduts();
// appendProductData(newProduct1).then(()=>{
//     readAllProduts();
// }).catch((err)=>{
//     console.log(err);
// });

(async ()=>{
    await appendProductData(newProduct1); 
    await readAllProduts();
    await searchProduct("Nokia");
})();