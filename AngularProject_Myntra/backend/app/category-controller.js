
const res = require('express/lib/response');
const db=require('../db/models');//index.js returns us db

const CategoryModel=db.Category;

exports.findAll=(req,res)=>{
    CategoryModel.findAll()
    .then(data=>res.json(data))
    .catch(err=>{
        res.status(500)
        .send({message:err.message || "something went wrong"})
    });
};

exports.findByPK=(req,res)=>{
    const id=parseInt(req.params.id);
    CategoryModel.findByPk(id)
    .then(data=>res.json(data))
    .catch(err=>{
        res.status(500)
        .send({message:err.message || "something went wrong"})
    });
};


//creating new Category
exports.create = (req, resp) => {
    if(!req.body.Name){
        res.status(400).send({
            message: "Content can not be empty!"
        });

        return;
    }
    const newCategory={
        Name: req.body.Name,
        Description: req.body.Description,
        // email: req.body.emailAdd,  
        // phoneNo: req.body.phoneNo,
        // address: req.body.address,
        // postalCode:req.body.postalCode,
        // password: req.body.password,
        // confirmPassword: req.body.confirmPassword,
        createdAt:new Date(),
        updatedAt:new Date()
    }
    CategoryModel.create(newCategory)
        .then(data=>{resp.send(data);})
            .catch((err) => {
                resp.status(500).send({
                    message: err.message || " Some error Creating new customer data"
                })
             })
};

//Updating Category
exports.update = (req, resp) => {
    const id = req.params.id;
    CategoryModel.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                resp.send({
                    message: `Category with id ${id} updated successfully.`
                });
            } 
            else {
                resp.send({
                message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
                });
            }
        })
        .catch((err) => {
            resp.status(500).send({
                message: err.message || " Some error retriving Category data"
            })
        })

};

exports.delete = (req, resp) => {

    const id = req.params.id;

    CategoryModel.destroy({ where: { id: id } })

        .then(num => {

            if (num == 1) {

                resp.send({ message: `customers with id=${id} deleted successfully!` });

            } else {

                resp.send({ message: `Cannot delete customers with id=${id}. Maybe customers was not found!` });

            }

        })

        .catch((err) => {

            resp.status(500).send({

                message: err.message || " Could not delete customers with id=" + id

            })

        })

}


//  exports.createCategory=(req,res)=>{};

//  exports.updateCategory=(req,res)=>{};

//  exports.delete=(req,res)=>{};
