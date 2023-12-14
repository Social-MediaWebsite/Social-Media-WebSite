const connection =require('../database-mysql/index')

const getComments=(cb)=>{
    const sql="SELECT * FROM comments"
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}
const getcommentsPost=(id,cb)=>{
    const sql=`SELECT * FROM comments inner join users on co_userId=userId where po_postId=${id}`
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

const AddComment=(comment,cb)=>{
    const sql=`INSERT INTO comments SET ?`
    const publishedAt=new Date()
    comment.co_publishedAt=publishedAt.toTimeString().slice(0,5)+" "+publishedAt.toDateString()
    comment.co_updatedAt=publishedAt.toTimeString().slice(0,5)+" "+publishedAt.toDateString()
    connection.query(sql,comment,(err,result)=>{
        cb(err,result)
    })
}

const UpdateComment=(upcom,id,cb)=>{
    const sql=`UPDATE comments SET ? where commentId=${id}`
    
    const updatedAt=new Date()
    upcom.co_updatedAt=updatedAt.toTimeString().slice(0,5)+" "+updatedAt.toDateString()
    connection.query(sql,upcom,(err,result)=>{
        cb(err,result)
    })
}

const deleteComment=(id,cb)=>{
    const sql=`DELETE FROM comments WHERE commentId=${id} `
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

module.exports={getComments,getcommentsPost,AddComment,UpdateComment,deleteComment}