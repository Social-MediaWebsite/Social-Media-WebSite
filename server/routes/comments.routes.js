const commentRouter = require('express').Router();
const {getAllCo,getAllCoOfPo,addCo,updateCo,deleteCo} = require("../controllers/comments.controllers");

commentRouter.get("/comments", getAllCo);
commentRouter.get("/comments/post/:id", getAllCoOfPo);
commentRouter.post("/comments", addCo)
commentRouter.put("/comments/:id", updateCo);
commentRouter.delete("/comments/:id", deleteCo);

module.exports = commentRouter;