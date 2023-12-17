const {getFriendsOfUser,addFriend,deleteFriend,getUserNF}=require('../models/friends.models')


const getFriends=(req,res)=>{
    getFriendsOfUser(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}   

const addFr=(req,res)=>{
    addFriend(req.body,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}


const deleteFr=(req,res)=>{
    deleteFriend(req.params.id,req.body.friendsId,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const getUsersNF=(req,res)=>{
    getUserNF(req.body.friends,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
  }

module.exports={getFriends,addFr,deleteFr,getUsersNF}