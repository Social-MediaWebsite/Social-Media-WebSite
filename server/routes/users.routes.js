const userRouter = require('express').Router();
const {getAll,addOne,updateOne,deleteOne, getById} = require("../controllers/users.controllers");
const {authenticateUser} = require("../middlewares/authMiddelware");

userRouter.post('/users', addOne);


// protected routes(user should login)
userRouter.get('/users/:id', authenticateUser, getById)
userRouter.get('/users', authenticateUser, getAll);
userRouter.put('/users/:id', authenticateUser, updateOne);
userRouter.delete('/users/:id', authenticateUser, deleteOne);

module.exports = userRouter; 