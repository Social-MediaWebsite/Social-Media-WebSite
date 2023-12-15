const {getPostes,getPostesUser,AddPost,updatePost,deletePost}=require('../models/postes.models')

const getAllPo=(req,res)=>{
    getPostes((err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const getAllPoOfOne=(req,res)=>{
    getPostesUser(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const addPo=(req,res)=>{
    AddPost(req.body,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const updatePo=(req,res)=>{
    updatePost(req.body,req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const deletePo=(req,res)=>{
    deletePost(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}



module.exports={getAllPo,getAllPoOfOne,addPo,updatePo,deletePo}