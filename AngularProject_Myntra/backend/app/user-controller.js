
const db=require('../db/models');
const bcrypt = require('bcrypt');
const saltRounds = 20;
const UserModel=db.User;

/*
const userModel=db.User;
const productModel=db.Product;
const cartModel=db.Cart;
const orderModel=db.Order;

SELECT orderModel.id,orderModel.orderdate,orderModel.firstName,
cartModel.productId,cartModel.unitPrice,cartModel.quantity,cartModel.firstName
userModel.id,userModel.firstName
FROM orderModel
JOIN cartModel  ON orderModel.firstName=cartModel.firstName
JOIN UserModel  ON orderModel.firstName=userModel.firstName
WHERE cartModel.firstName=userModel.firstName;


*/

//create User
exports.create = (req, resp) => {
const hash = bcrypt.hashSync(req.body.password, saltRounds);
console.log('encyptedpassword',hash);
    if(!req.body.firstName){
        res.status(400).send({
            message: "Content can not be empty!"
        });

        return;
    }
    const newUser={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,  
        mobile: req.body.mobile,
        address: req.body.address,
        postalCode:req.body.postalCode,
        password:hash,
        createdAt:new Date(),
        updatedAt:new Date(),
        // password: req.body.password,
        
       
    }
    UserModel.create(newUser)
        .then(data=>{resp.send(data);})
            .catch((err) => {
                resp.status(500).send({
                    message: err.message || " Some error Creating new User data"
                })
             })
};
