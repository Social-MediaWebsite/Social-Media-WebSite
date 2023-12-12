const connection =require('../database-mysql/index')

const getAllUsers=(cb)=>{
    const sql="SELECT * FROM users"
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

const AddUser=(user,cb)=>{
    const createdAt=new Date()
    user.createdAt=createdAt.toTimeString().slice(0,5)+" "+createdAt.toDateString()
    const sql=`INSERT INTO users SET ?`
    connection.query(sql,[user],(err,result)=>{
        cb(err,result)
    })
}

const updateUser=(user,id,cb)=>{
    const sql=`UPDATE users SET ? WHERE userId=${id}`
    connection.query(sql,user,(err,result)=>{
        cb(err,result)
    })
}
const deleteUser=(id,cb)=>{
    const sql=`DELETE FROM users WHERE userId=${id}`
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

module.exports={getAllUsers,AddUser,updateUser,deleteUser}