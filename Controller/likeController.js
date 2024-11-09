const Post=require('../Model/postModel')
const Like=require('../Model/likeModel')

//like a post

exports.likePost=async (req,res)=>{
    try {

        const {post,user}=req.body;
        const like =new Like({
            post,user
        })
        const savedLike= await like.save();

        // update the post collection basis on this

        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate("likes").exec();
        res.status(200).json({
            post:updatedPost
        })

        
    } catch (error) {
        res.status(400).json({
            error:"Error while like the Post"
        })
        
    }
}

//unlike the post
exports.unlikePost=async(req,res)=>{
    try {
        const {post,like}=req.body;
        
        //find and delete the like from collection  named like

        const deletedLike= await Like.findOneAndDelete({post:post,_id:like});

        //update the post collection
        const updatedPost= await Post.findByIdAndUpdate(post,{$pull:{likes: deletedLike._id}},{new:true});
        
        res.status(200).json({
            post:updatedPost,
        })

        
    } catch (error) {
        res.status(400).json({
            error:"Error while making the post unlike"
        })
    }

}
