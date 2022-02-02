
const res = require('express/lib/response');
const db=require('../db/models');
const orders = require('../db/models/orders');
const User=db.User;
const Order=db.orders;
const orderDetailsModel=db.orderDetails;
global.id=0;
const cartModel=db.cart;
//   exports.findAll=(req,res)=>{
//     Order.max('id').then(Max=>{
//      global.id=Max;
//       console.log(id);
//     })
//     User.findAll({
//     //   where: {
//     // '$Order.id$':1
//     //   },
//         include: [
//           {
//             model:Order,
//             required:true,
//             as:'orders'
//           },
//           {
//             model:cartModel,
//             required:true,
//           }
//           ]
//         }
//       )
    
//     .then(data=>res.json(data))
//     .catch(err=>{
//         res.status(500)
//         .send({message:err.message || "something went wrong"})
//     });
// };

  


exports.findAll=(req,res)=>{
  Order.max('id').then(Max=>{
   id=Max;
    console.log(id);
  })
  Order.findAll({
    limit: 1,
    where: {
      //your where conditions, or without them if you need ANY entry
    },
    order: [ [ 'createdAt', 'DESC' ]]
      }
    )
  
  .then(data=>res.json(data))
  .catch(err=>{
      res.status(500)
      .send({message:err.message || "something went wrong"})
  });
};


exports.create = (req, resp) => {
  if(!req.body.firstName){
      res.status(400).send({
          message: "Content can not be empty!"
      });

      return;
  }
  const newOrder={
      firstName: req.body.firstName,
      lastName:req.body.lastName,
      email:req.body.email,
      address:req.body.address,
      city:req.body.city,
      state:req.body.state,
      zip:req.body.zip,
      paymentMode:req.body.paymentMethod,
      productId:req.body.productId,
      productQuantity: req.body.productQuantity,
      productPrice: req.body.productPrice,  
      createdAt:new Date(),
      updatedAt:new Date(),
      orderId:req.body.orderId,
      // password: req.body.password,
      // confirmPassword: req.body.confirmPassword,
     
  }
  orderDetailsModel.create(newOrder)
      .then(data=>{resp.send(data);})
          .catch((err) => {
              resp.status(500).send({
                  message: err.message || " Some error Creating new Orders data"
              })
           })
};

 
  


    
