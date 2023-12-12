const connection =require('../database-mysql/index')

const getPostes=(cb)=>{
    const sql="SELECT * FROM postes"
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}
const getPostesUser=(id,cb)=>{
    const sql=`SELECT * FROM postes where userPoId=${id}`
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

const AddPost=(post,cb)=>{
    const sql=`INSERT INTO postes SET ?`
    connection.query(sql,post,(err,result)=>{
        cb(err,result)
    })
}

module.exports={getPostes,getPostesUser,AddPost}