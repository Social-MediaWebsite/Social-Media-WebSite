const {getLikes,getLikesOfPost,getCountLikesOfPost,AddLikes,deleteLikes}=require('../models/likes.models')

const getAllLikes=(req,res)=>{
    getLikes((err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const getLikesOfPo=(req,res)=>{
    getLikesOfPost(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}   

const getLikesCount=(req,res)=>{
    getCountLikesOfPost(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const addLikes=(req,res)=>{
    AddLikes(req.body,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}


const deleteLike=(req,res)=>{
    deleteLikes(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}


module.exports={getAllLikes,getLikesOfPo,getLikesCount,addLikes,deleteLike}