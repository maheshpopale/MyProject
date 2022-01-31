const { Router } = require('express');
module.exports=(app)=>{
    const express=require('express');
    const ROUTER=express.Router();
    const CategoryController=require('./category-controller');
    const ProductController=require('./product-controller');
    const UserController=require('./user-controller');
    const db=require('../db/models');
    const UserModel=db.User;
    const ProductModel=db.Product;
    const AdminModel=db.Admin;

    /**Admin Routes */
    ROUTER.post('/admin/login',(req,res)=>{
         const email=req.body.email;
         const password=req.body.password;
         console.log(email,password);
        AdminModel.findAll({
            where: { email:email,password:password },
            })
            .then(data=>res.json(data))
    .catch(err=>{
        res.status(500)
        .send({message:err.message || "something went wrong"})
    });

     });


    /**Category Routes */

    ROUTER.get('/categories',CategoryController.findAll)

    ROUTER.get('/categories/:id',CategoryController.findByPK);

    ROUTER.post('/categories/add',CategoryController.create);

     ROUTER.put('/categories/update/:id',CategoryController.update);

     ROUTER.delete('/Categories/delete/:id',CategoryController.delete);
     

    /**Product Routes */

     ROUTER.get('/products',ProductController.findAll);

     ROUTER.post('/products/add',ProductController.create);

     ROUTER.get('/products/:id',ProductController.findByPK);

     ROUTER.put('/products/update/:id',ProductController.update);

     ROUTER.delete('/products/delete/:id',ProductController.delete);

    ROUTER.get('/products/bycategory/:id',(req,res)=>{
        const id=parseInt(req.params.id);
        ProductModel.findAll({
            where: { CategoryId:id },
            })
            .then(data=>res.json(data))
    .catch(err=>{
        res.status(500)
        .send({message:err.message || "something went wrong"})
    });
    });




     /**User Routes */
     ROUTER.post('/register',UserController.create);

     ROUTER.post('/login',(req,res)=>{
         const email=req.body.email;
         const password=req.body.password;
         console.log(email,password);
        UserModel.findAll({
            where: { email:email,password:password },
            })
            .then(data=>res.json(data))
    .catch(err=>{
        res.status(500)
        .send({message:err.message || "something went wrong"})
    });

     });

     
    app.use('/app',ROUTER);
}