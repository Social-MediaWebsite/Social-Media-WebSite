const {getReply,getReplyComment,AddReply,UpdateReply,deleteReply}=require('../models/reply.models')

const getAllReplys=(req,res)=>{
    getReply((err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const getReOfCo=(req,res)=>{
    getReplyComment(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const addRe=(req,res)=>{
    AddReply(req.body,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const updateRe=(req,res)=>{
    UpdateReply(req.body,req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const deleteRe=(req,res)=>{
    deleteReply(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}



module.exports={getAllReplys,getReOfCo,addRe,updateRe,deleteRe}