const connection =require('../database-mysql/index')

const getLikes=(cb)=>{
    const sql="SELECT * FROM likes"
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}
const getLikesOfPost=(id,cb)=>{
    const sql=`SELECT * FROM likes inner join users on li_userId=userId where po_postId=${id}`
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

const getCountLikesOfPost=(id,cb)=>{
    const sql=`SELECT COUNT(idlikes) AS count FROM likes WHERE po_postId=${id}`
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

const AddLikes=(like,cb)=>{
    const sql=`INSERT INTO likes SET ?`
    connection.query(sql,like,(err,result)=>{
        cb(err,result)
    })
}

const deleteLikes=(id,cb)=>{
    const sql=`DELETE FROM comments WHERE commentId=${id} `
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

module.exports={getLikes,getLikesOfPost,getCountLikesOfPost,AddLikes,deleteLikes}