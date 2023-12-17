const friendsRouter = require('express').Router();
const {getFriends,addFr,deleteFr,getUsersNF} = require("../controllers/friends.controllers");


friendsRouter.get("/friends/:id", getFriends);
friendsRouter.post("/friend", addFr)
friendsRouter.put("/friend",getUsersNF)
friendsRouter.delete("/friend/:id", deleteFr);

module.exports = friendsRouter;