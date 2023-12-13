
const {getAllUsers,AddUser,updateUser,deleteUser, getUserByEmail, getUserById}=require('../models/users.models')
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ userId }, 'secretKey', { expiresIn: '1h' });
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
      res.status(500).send(err);
    } else {
      console.log("Result:", result);
      const token = generateToken(body.userId, body.userName);
      const { userName,userEmail} = body;
      res.json({userName,userEmail,token});
    }
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



const getByEmail = (req, res) => {
    const userEmail = req.params.email;

    getUserByEmail(userEmail, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (!result) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(result);
      }
    });
  };

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




module.exports={getAll,addOne,updateOne,deleteOne, getByEmail, getById}

