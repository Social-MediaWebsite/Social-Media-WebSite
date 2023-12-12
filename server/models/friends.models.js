const connection =require('../database-mysql/index')

const getFriendsOfUser=(id,cb)=>{
    const sql=`SELECT * FROM friends INNER JOIN users ON friendsId=userId WHERE fr_userId=${id}`
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

const addFriend=(friend,cb)=>{
    const sql=`INSERT INTO friends SET ?`
    connection.query(sql,friend,(err,result)=>{
        cb(err,result)
    })
}

const deleteFriend=(id,cb)=>{
    const sql=`DELETE FROM friends WHERE friendsId=${id}`
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

module.exports={getFriendsOfUser,addFriend,deleteFriend}