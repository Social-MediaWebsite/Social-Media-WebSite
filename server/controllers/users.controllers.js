const {getAllUsers,AddUser,updateUser,deleteUser}=require('../models/users.models')

const getAll=(req,res)=>{
    getAllUsers((err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const addOne=(req,res)=>{
    AddUser(req.body,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const updateOne=(req,res)=>{
    updateUser(req.body,req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const deleteOne=(req,res)=>{
    deleteUser(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}



module.exports={getAll,addOne,updateOne,deleteOne}