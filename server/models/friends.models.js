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

const deleteFriend=(id,friendId,cb)=>{
    const sql=`DELETE FROM friends WHERE fr_userId=${id} AND friendsId=${friendId} `
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}
const getUserNF=(arr,cb)=>{
    const sql=`select * from users where not userId in (${arr.join()});`
        connection.query(sql,(err,result)=>{
            cb(err,result)
        })
}

module.exports={getFriendsOfUser,addFriend,deleteFriend,getUserNF}