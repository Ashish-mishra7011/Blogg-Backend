const Post = require("../Model/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;  
    const post = new Post({
      title,
      body,
    });                          //creating an object and pushing the post in it. 
    const savedPost = await post.save();
    
    res.status(200).json({
      post: savedPost,
    });
  } 
  catch (error) {

    return res.status(400).json({
      error: "Error while creating post",

    });
  }
};

exports.getAllPost=async(req,res)=>{
    try {
        const posts=await Post.find().populate('likes').populate('comments').exec();
        res.status(200).json({
            posts:posts,
        })
        
    } catch (error) {
        return res.status(400).json({
            error: "Error while fetching all posts",
      
          });
        
    }
}
