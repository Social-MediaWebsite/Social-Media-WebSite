const connection =require('../database-mysql/index')

const getPostes=(cb)=>{
    const sql="SELECT * FROM postes INNER JOIN users ON po_userId=userId"
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}
const getPostesUser=(id,cb)=>{
    const sql=`SELECT * FROM postes INNER JOIN users ON po_userId=userId where po_userId=${id}`
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

const AddPost=(post,cb)=>{
    const sql=`INSERT INTO postes SET ?`
    const publishedAt=new Date()
    post.po_publishedAt=publishedAt.toTimeString().slice(0,5)+" "+publishedAt.toDateString()
    post.po_updatedAt=publishedAt.toTimeString().slice(0,5)+" "+publishedAt.toDateString()
    connection.query(sql,post,(err,result)=>{
        cb(err,result)
    })
}

const updatePost=(post,id,cb)=>{
    const sql=`UPDATE postes SET ? WHERE postId=${id}`
    const updatedAt=new Date()
    post.po_updatedAt=updatedAt.toTimeString().slice(0,5)+" "+updatedAt.toDateString()
    connection.query(sql,post,(err,result)=>{
        cb(err,result)
    })
}
const deletePost=(id,cb)=>{
    const sql=`DELETE FROM postes WHERE postId=${id}`
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

module.exports={getPostes,getPostesUser,AddPost,updatePost,deletePost}