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

const PRODUCTS=[
    {productId:1,productName:'Moda Rapido',productPrice:499,productDescription:'Available products',quantity:10,productImg:'http://localhost:4200/assets/slide1.jpg'},
    {productId:2,productName:'U.S.Polo Assn',productPrice:549,productDescription:'Available products',quantity:5,productImg:'http://localhost:4200/assets/slide2.jpg'},
    {productId:3,productName:'Levis',productPrice:450,productDescription:'Available products',quantity:12,productImg:'http://localhost:4200/assets/slide3.jpg'}
];  
server.get('/',(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.send("Welcome");
});

server.get('/products',(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.send(PRODUCTS);
});

server.post('/products/add',(req,res)=>{
    res.setHeader("Content-Type","application/json");
    const id=PRODUCTS.length+1;
    console.log(req.body);
    console.log(req.body.productName);
    const product={categoryId:id,categoryName:req.body.Name,categoryDescription:req.body.Description};   
    PRODUCTS.push(product);
    res.send(JSON.stringify(product)+"New Category Added");
});



server.listen(port,()=>{
    console.log(`http://localhost:${port}Started`);
});
