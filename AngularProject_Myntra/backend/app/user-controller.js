
const db=require('../db/models');

const UserModel=db.User;
//create User
exports.create = (req, resp) => {
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
        password:req.body.password,
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
