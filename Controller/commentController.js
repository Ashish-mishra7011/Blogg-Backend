const Post =require("../Model/postModel");
const Comment=require("../Model/commentModel");

// business logic 

exports.createComment= async(req,res)=>{
    try {
        //fetch data from DB
        const{post,user,body}=req.body;
        // create a comment obj
        const comment = new Comment ({
            post, user ,body
        })
        //creating new entry
        const savedComment= await comment.save();
        
        //find the post by ID ,add the new comment to its comment's array
        const updatedPost= await Post.findByIdAndUpdate(post,{ $push:{comments:savedComment._id} }, {new:true} )
        .populate("comments")        //populate the comments array with the comment document 
        .exec();
        
        res.json({
            post:updatedPost
        })
        
    } catch (error) {
        return res.status(500).json({
            error:"Error while creating comments",
            
        })
    }

}