const express = require('express');
const app = express();
require("dotenv").config();

//middleware
app.use(express.json());

//Routes using API 
 const routes =require("./Routes/route.js")
 app.use("/api/v1",routes);

//DB connectivity
const connectDb=require('./Config/database.js')
connectDb();

//PORT listening
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`);
})

//all the  routes
app.get("/",(req,res)=>{
    res.send("<h1>This is Home page will get modified soon ...</h1>")

})