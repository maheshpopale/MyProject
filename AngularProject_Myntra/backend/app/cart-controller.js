const db=require('../db/models');
const cartModel=db.cart;


exports.create = (req, resp) => {
    if(!req.body.productName){
        res.status(400).send({
            message: "Content can not be empty!"
        });

        return;
    }
    const newCartItem={
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productQuantity: req.body.productQuantity,
        createdAt:new Date(),
        updatedAt:new Date(),
        UserId:req.body.userId,
        // password: req.body.password,
        // confirmPassword: req.body.confirmPassword,
       
    }
    cartModel.create(newCartItem)
        .then(data=>{resp.send(data);})
            .catch((err) => {
                resp.status(500).send({
                    message: err.message || " Some error Creating new Cart data"
                })
             })
};
