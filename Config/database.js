const mongoose=require('mongoose');
require("dotenv").config();


const connectDb=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log('DataBase Connected successfully');})
    .catch((error)=>{
        console.error('Database Connection Failed and error is: '+ error);
        process.exit(1);

    })
    
}

module.exports=connectDb;
