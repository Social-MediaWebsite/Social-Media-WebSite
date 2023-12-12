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
const deleteUser=(user,id,cb)=>{
    const sql=`DELETE FROM users WHERE userId=${id}`
    connection.query(sql,user,(err,result)=>{
        cb(err,result)
    })
}


const getUserByEmail = (email, cb) => {
    const sql = 'SELECT * FROM users WHERE userEmail = ?';
    connection.query(sql, [email], (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        const user = result[0];
        cb(null, user);
      }
    });
  };

const getUserById = (id, cb) => {
    const sql = 'SELECT * FROM users WHERE userId = ?';
    connection.query(sql, [id], (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        const user = result[0];
        cb(null, user);
      }
    });
  };



module.exports={getAllUsers,AddUser,updateUser,deleteUser, getUserByEmail, getUserById}

