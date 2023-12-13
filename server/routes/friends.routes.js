const friendsRouter = require('express').Router();
const {getFriends,addFr,deleteFr} = require("../controllers/friends.controllers");


friendsRouter.get("/friends/:id", getFriends);
friendsRouter.post("/friend", addFr)
friendsRouter.delete("/friend/:id", deleteFr);

module.exports = friendsRouter;