const express=require('express');
const server=express();
const port=3000;
const cors=require('cors');
const bodyParser=require('body-parser');
const { nextTick } = require('process');
const { param } = require('express/lib/request');
const { randomInt } = require('crypto');
const corsOptions={
    origin:"http://localhost:4200",
    optionsSuccessStatus:200
};
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors(corsOptions));

const CATEGORIES=[
    {categoryId:1,categoryName:'Casual Tshirts',categoryDescription:"Casual TShirts are available"},
    {categoryId:2,categoryName:'Polo Tshirts',categoryDescription:"Polo TShirts are available"},
    {categoryId:3,categoryName:'Soccer Tshirts',categoryDescription:"Soccer TShirts are available"},
    {categoryId:4,categoryName:'Cap Slives',categoryDescription:"Cap Sives TShirts are available"}
    
];

const PRODUCTS=[
    {productId:1,productName:'Moda Rapido',categoryId:2,quantity:10,productPrice:499,productDescription:'Available products',productImg:'http://localhost:4200/assets/slide1.jpg'},
    {productId:2,productName:'U.S.Polo Assn',categoryId:3,quantity:10,productPrice:549,productDescription:'Available products',productImg:'http://localhost:4200/assets/slide2.jpg'},
    {productId:3,productName:'Levis',categoryId:1,quantity:10,productPrice:450,productDescription:'Available products',productImg:'http://localhost:4200/assets/slide3.jpg'}
];  
server.get('/',(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.send("Welcome");
});

//All Categories
server.get('/categories',(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.send(CATEGORIES);
});
//get by id
server.get('/categories/:id',(req,resp)=>{
   const id=parseInt(req.params.id);
    resp.setHeader("Content-Type","application/json");
    console.log(id);
    CATEGORIES.forEach(element=>{
        //console.log(element);
        if(element.categoryId===id){
            //console.log(element);
            resp.send(element);
        }
    })      
});
//add category
server.post('/categories/add',(req,res)=>{
    res.setHeader("Content-Type","application/json");
    const id=CATEGORIES.length+1;
    console.log(req.body);
    console.log(req.body.categorydescription);
    const category={categoryId:id,categoryName:req.body.Name,categoryDescription:req.body.Description};   
    CATEGORIES.push(category);
    res.send(JSON.stringify(category)+"New Category Added");
});
//update Category
server.put('/categories/updateCategory/:id',(req,res)=>{
// console.log(req.params.id);
// console.log(req.body.Description);
// console.log(req.body.categoryName);
    const id=req.params.id;
    CATEGORIES.forEach(element=>{
    if(element.categoryId==id)
    {
        element.categoryName=req.body.categoryName;
        element.categoryDescription=req.body.Description;
        res.send(element.categoryName+' '+'updated successfully');
    }
})
});
//detete Category
server.delete('/categories/delete/:id',(req,res)=>{
    //console.log(req.params.id);
    const id=req.params.id;
    CATEGORIES.forEach(element=>{
        if(element.categoryId==id)
        CATEGORIES.pop(element);
    })
});
/**
 * 
 * Products api
 */

server.get('/products',(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.send(PRODUCTS);
});

//product by id
server.get('/products/:id',(req,resp)=>{
    const id=parseInt(req.params.id);
     resp.setHeader("Content-Type","application/json");
     console.log(id);
     PRODUCTS.forEach(element=>{
         //console.log(element);
         if(element.productId===id){
             //console.log(element);
             resp.send(element);
         }
     })      
 });
//add product 
server.post('/products/add',(req,res)=>{
    res.setHeader("Content-Type","application/json");
    const id=PRODUCTS.length+1;
    console.log(req.body);
    console.log(req.body.productName);
    const product={productId:id,productName:req.body.productName,
    quantity:req.body.quantity,
    categoryId:req.body.categoryId,
    productPrice:req.body.productPrice,
    productDescription:req.body.productDescription,
    productImg:req.body.productImg
    };   
    PRODUCTS.push(product);
    res.send(JSON.stringify(product)+"New Category Added");
});

//update Product
server.put('/products/update/:id',(req,res)=>{
    // console.log(req.params.id);
     console.log(req.body.productName);
    console.log(req.body.productCategory);
    console.log(req.body.productQuantity);
    console.log(req.body.productPrice);
    console.log(req.body.productDescription);
    console.log(req.body.image);
        const id=req.params.id;
        PRODUCTS.forEach(element=>{
        if(element.categoryId==id)
        {
            console.log("matched");
            element.productName=req.body.productName;
            element.categoryId=req.body.productCategory;
            element.quantity=req.body.productQuantity;
            element.productPrice=req.body.productPrice;
            element.productDescription=req.body.productDescription;
            element.productImg=req.body.image;
            res.send(element.categoryName+' '+'updated successfully');
        }
    })
    });

//delete Product
server.delete('/products/delete/:id',(req,res)=>{
    //console.log(req.params.id);
    console.log(req.params.id);
    const id=req.params.id;
    PRODUCTS.forEach(element=>{
        if(element.categoryId==id)
        PRODUCTS.pop(element);
    })
});


server.listen(port,()=>{
    console.log(`http://localhost:${port}Started`);
});