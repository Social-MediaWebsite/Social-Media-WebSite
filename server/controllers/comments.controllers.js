const {getComments,getcommentsPost,AddComment,UpdateComment,deleteComment}=require('../models/comments.models')

const getAllCo=(req,res)=>{
    getComments((err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const getAllCoOfPo=(req,res)=>{
    getcommentsPost(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const addCo=(req,res)=>{
    AddComment(req.body,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const updateCo=(req,res)=>{
    UpdateComment(req.body,req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const deleteCo=(req,res)=>{
    deleteComment(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}



module.exports={getAllCo,getAllCoOfPo,addCo,updateCo,deleteCo}