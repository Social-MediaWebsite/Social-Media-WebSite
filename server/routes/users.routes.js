const userRouter = require('express').Router();
const {getAll,addOne,updateOne,deleteOne} = require("../controllers/users.controllers");

userRouter.get("/users", getAll);
userRouter.post("/users", addOne)
userRouter.put("/users/:id", updateOne);
userRouter.delete("/users/:id", deleteOne);

module.exports = userRouter;