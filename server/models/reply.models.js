const connection =require('../database-mysql/index')

const getReply=(cb)=>{
    const sql="SELECT * FROM reply"
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}
const getReplyComment=(id,cb)=>{
    const sql=`SELECT * FROM reply inner join users on re_userId=userId where co_commentId=${id}`
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

const AddReply=(reply,cb)=>{
    const sql=`INSERT INTO reply SET ?`
    const publishedAt=new Date()
    reply.re_publishedAt=publishedAt.toTimeString().slice(0,5)+" "+publishedAt.toDateString()
    reply.re_updatedAt=publishedAt.toTimeString().slice(0,5)+" "+publishedAt.toDateString()
    connection.query(sql,reply,(err,result)=>{
        cb(err,result)
    })
}

const UpdateReply=(uprep,id,cb)=>{
    const sql=`UPDATE reply SET ? where replyId=${id}`
    const updatedAt=new Date()
    uprep.re_updatedAt=updatedAt.toTimeString().slice(0,5)+" "+updatedAt.toDateString()
    connection.query(sql,uprep,(err,result)=>{
        cb(err,result)
    })
}

const deleteReply=(id,cb)=>{
    const sql=`DELETE FROM reply WHERE replyId=${id} `
    connection.query(sql,(err,result)=>{
        cb(err,result)
    })
}

module.exports={getReply,getReplyComment,AddReply,UpdateReply,deleteReply}