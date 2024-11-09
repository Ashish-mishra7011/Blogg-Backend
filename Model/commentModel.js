//import mongoose
const mongoose=require('mongoose')

//model handler
const commentSchema=new mongoose.Schema({
        post:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"  //this is referring to the Post model  

        },
        user:{
            type:String,
            required:true
        },
        body:{
            type:String,
            required:true
        }
         
});


//exports

module.exports=mongoose.model("Comment",commentSchema);