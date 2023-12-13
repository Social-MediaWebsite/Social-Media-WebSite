const likesRouter = require('express').Router();
const {getAllLikes,getLikesOfPo,getLikesCount,addLikes,deleteLike} = require("../controllers/likes.controllers");

likesRouter.get("/likes", getAllLikes);
likesRouter.get("/likes/post/:id", getLikesOfPo);
likesRouter.get("/likes/count/:id",getLikesCount);
likesRouter.post("/like", addLikes)
likesRouter.delete("/like/:id", deleteLike);

module.exports = likesRouter;