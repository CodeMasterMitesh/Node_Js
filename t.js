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

        let data = [];

            if(fileSystem.existsSync(filePath)){
                const content  = await fileSystem.promises.readFile(filePath,"utf-8");
                if(content.trim().length > 0){
                    try {
                        data = JSON.parse(content);
                        if(!Array.isArray(data)){
                            console.log("File Content Is Not Array. Resseting to array []");
                            data = [];
                        }
                        
                    } catch (error) {
                        console.log("Invalid JSON. Resetting to []");
                        data = [];
                    }
                }
            }
      
        data.push(newProduct);

        const res =  await fileSystem.promises.writeFile(filePath,JSON.stringify(data,null,2),"utf-8");
        // console.log(res);
        console.log("Data Store");

    } catch (error) {
        console.error(error);
    }

}   


const readProducts = async ()=>{
    try {
        if(!fileSystem.existsSync(filePath)){
            console.log("File Not Found");
            return;
        }

        const content = await fileSystem.promises.readFile(filePath,"utf-8");

        if(content.trim().length === 0){
            console.log("File Have No Content");
            return;
        }

        let data = JSON.parse(content);

        if(!Array.isArray(data)){
            data = [data];
        }

        // console.log(data);
        console.log("Product List");
        data.forEach((product,index)=>{
            console.log(`${index + 1}. ${product.name} - ₹${product.price} (${product.modelYear})`);
        });

    } catch (error) {
        console.error("Error in Products:", error);
    }
};


const searhProduct = async (searchTerm)=>{

    try {
        if(!fileSystem.existsSync(filePath)){
            console.log("File Not Exist");
            return;
        }

        const content = await fileSystem.promises.readFile(filePath,"utf-8");

        if(content.trim().length === 0){
            console.log("File id Empty");
            return;
        }

        let data = JSON.parse(content);

        if(!Array.isArray(data)){
            data = [data];
        }

        console.log(`Search results for "${searchTerm}":`);
        const res = data.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        if(res.length > 0){
            // console.log(res);
            res.forEach((product,index)=>{
                console.log(`${index + 1}. ${product.name} - ₹${product.price} (${product.modelYear})`);
            });
        };

    } catch (error) {
        console.warn("Error in searchProduct:", error);
    }

};



appendProductData().then(()=>{
    readProducts().then(()=>{
        searhProduct("Nokin");
    });
}); 