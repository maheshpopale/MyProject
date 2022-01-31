const express=require('express');
const server=express();
const port=3000;
const cors=require('cors');
const bodyParser=require('body-parser'); 
const CORS_OPTIONS={origin:"http://localhost:4200"};
server.use(bodyParser.json({limit: '100mb'}));
server.use(express.json({limit: '100mb'}));
server.use(express.urlencoded({limit: '100mb',extended:true}));
server.use(cors(CORS_OPTIONS));
const db=require('./db/models');
db.sequelize.sync();

require('./app/app-route')(server);
server.get('/',(req,res)=>{
    res.send({message:"Welcome to express +postgres+node"});

});

server.listen(port,()=>{
    console.log(`http://localhost${port} Started`);
});