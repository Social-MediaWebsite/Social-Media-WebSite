const replyRouter = require('express').Router();
const {getAllReplys,getReOfCo,addRe,updateRe,deleteRe}= require("../controllers/reply.controllers");

replyRouter.get("/replys", getAllReplys);
replyRouter.get("/replys/post/:id", getReOfCo);
replyRouter.post("/reply", addRe)
replyRouter.put("/reply/:id", updateRe);
replyRouter.delete("/reply/:id", deleteRe);

module.exports = replyRouter;