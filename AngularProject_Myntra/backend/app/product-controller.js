

const db=require('../db/models');

const ProductModel=db.Product;

exports.findAll=(req,res)=>{
    ProductModel.findAll()
    .then(data=>res.json(data))
    .catch(err=>{
        res.status(500)
        .send({message:err.message || "something went wrong"})
    });
};

exports.findByPK=(req,res)=>{
    const id=parseInt(req.params.id);
    ProductModel.findByPk(id)
    .then(data=>res.json(data))
    .catch(err=>{
        res.status(500)
        .send({message:err.message || "something went wrong"})
    });
};

exports.create = (req, resp) => {
    if(!req.body.productName){
        res.status(400).send({
            message: "Content can not be empty!"
        });

        return;
    }
    const newProduct={
        productName: req.body.productName,
        productQuantity: req.body.productQuantity,
        productPrice: req.body.productPrice,  
        productDescription: req.body.productDescription,
        image: req.body.image,
        createdAt:new Date(),
        updatedAt:new Date(),
        CategoryId:req.body.CategoryId,
        // password: req.body.password,
        // confirmPassword: req.body.confirmPassword,
       
    }
    ProductModel.create(newProduct)
        .then(data=>{resp.send(data);})
            .catch((err) => {
                resp.status(500).send({
                    message: err.message || " Some error Creating new customer data"
                })
             })
};

//Update Product

exports.update = (req, resp) => {
    const id = req.params.id;
    ProductModel.update(req.body, { where: { id: id } })
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



/**Delete */
exports.delete = (req, resp) => {

    const id = req.params.id;

    ProductModel.destroy({ where: { id: id } })

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

};


