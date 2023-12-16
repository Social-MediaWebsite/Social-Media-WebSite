const {getAllUsers,AddUser,updateUser,deleteUser, getUserById}=require('../models/users.models')
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  const expiresIn = 60 * 60 * 24
  return jwt.sign({ userId }, 'secretKey', { expiresIn: expiresIn });
};

const getAll=(req,res)=>{
    getAllUsers((err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}


const addOne = (req, res) => {
  const { body } = req;

  AddUser(body, (err, result) => {
    if (err) {
      console.error("Error:", err);
      return res.status(500).send(err);
    }
    // console.log("Result:", result.insertId);
    const token = generateToken(body.userId, body.userName);
    const userId = result.insertId
    const { userName, userEmail } = body;
    res.json({ userName, userEmail, userId, token });
  });
};
const updateOne=(req,res)=>{
    updateUser(req.body,req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}

const deleteOne=(req,res)=>{
    deleteUser(req.params.id,(err,result)=>{
        err?res.status(500).send(err):res.json(result)
    })
}


// const getByEmail = (req, res) => {
//     const userEmail = req.params.email;
//     const {body} = req.body

//     getUserByEmail(userEmail, (err, result) => {
//       if (err) {
//         res.status(500).send(err);
//       } else if (!result) {
//         res.status(404).json({ message: 'User not found' });
//       } else {
//         const token = generateToken(body.userId, body.userName);
//         res.json(result);
//       }
//     });
//   };

const getById = (req, res) => {
    const userId = req.params.id;

    getUserById(userId, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (!result) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(result);
      }
    });
  };

module.exports={getAll,addOne,updateOne,deleteOne,getById}
