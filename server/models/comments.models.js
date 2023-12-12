const connection =require('../database-mysql/index')

const getComments=(cb)=>{
    const sql="SELECT * FROM comments"
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}
const getcommentsPost=(id,cb)=>{
    const sql=`SELECT * FROM comments inner join users on userCoId=idusers where postId=${id}`
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

const AddComment=(comment,cb)=>{
    const sql=`INSERT INTO comments SET ?`
    connection.query(sql,comment,(err,result)=>{
        cb(err,result)
    })
}

const UpdateComment=(upcom,id,cb)=>{
    const sql=`UPDATE comments SET  where idcomments=${id}`
    connection.query(sql,upcom,(err,result)=>{
        cb(err,result)
    })
}

module.exports={getComments,getcommentsPost,AddComment}