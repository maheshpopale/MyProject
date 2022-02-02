
const db=require('../db/models');

const orderModel=db.orders;

exports.create = (req, resp) => {
    if(!req.body.userId){
        res.status(400).send({
            message: "Content can not be empty!"
        });

        return;
    }
    const newOrder={
        orderDate:new Date(),
        createdAt:new Date(),
        updatedAt:new Date(),
        UserId:req.body.userId
        // password: req.body.password,
        // confirmPassword: req.body.confirmPassword,
       
    }
    orderModel.create(newOrder)
        .then(data=>{resp.send(data);})
            .catch((err) => {
                resp.status(500).send({
                    message: err.message || " Some error Creating new Order data"
                })
             })
};