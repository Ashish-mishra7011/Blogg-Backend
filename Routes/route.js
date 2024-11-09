const express = require("express")
const router =express.Router();

//Import controller
const {createComment}=require('../Controller/commentController');
const {createPost,getAllPost}=require('../Controller/postController');
const {likePost,unlikePost}=require('../Controller/likeController');






//Mapping
router.post('/comments/createComment',createComment); //working
router.get('/posts',getAllPost);                     //working
router.post('/posts/createPost',createPost);        //working
router.post('/likes/like',likePost);               //working
router.post('/likes/unlike',unlikePost);          //working







//export 
module.exports = router;