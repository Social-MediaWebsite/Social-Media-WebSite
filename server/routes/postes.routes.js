const postRouter = require('express').Router();
const {getAllPo,getAllPoOfOne,addPo,updatePo,deletePo} = require("../controllers/postes.controllers");

postRouter.get("/postes", getAllPo);
postRouter.get("/postes/user/:id", getAllPoOfOne);
postRouter.post("/postes", addPo)
postRouter.put("/postes/:id", updatePo);
postRouter.delete("/postes/:id", deletePo);

module.exports = postRouter;