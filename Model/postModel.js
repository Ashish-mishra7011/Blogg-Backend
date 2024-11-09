//import mongoose
const mongoose=require('mongoose')

//model handler
const postSchema=new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        },
        likes:[{
            type:mongoose.Schema.Types.ObjectId, // defining array in DB
            ref:'Like',

        }],
        comments:[{
            type:mongoose.Schema.Types.ObjectId,  //defining array in DB
            ref:"Comment",
        }]

         
});


//exports

module.exports=mongoose.model("Post",postSchema);