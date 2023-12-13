const express = require("express");

const authController = require('./controllers/authentificationcontroller.js')

const userRouter = require('./routes/users.routes')
const postRouter = require('./routes/postes.routes')
const commentRouter = require('./routes/comments.routes')
const replyRouter= require('./routes/reply.routes')
const likesRouter=require('./routes/likes.routes')
const friendsRouter=require('./routes/friends.routes')

const cors = require('cors')

const db = require('./database-mysql');
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())


app.post('/register', authController.registerUser);
app.post('/login', authController.loginUser);


app.use("/api/socialMedia", userRouter);
app.use("/api/socialMedia", postRouter);
app.use("/api/socialMedia", commentRouter);
app.use("/api/socialMedia", replyRouter);
app.use("/api/socialMedia", likesRouter);
app.use("/api/socialMedia", friendsRouter);


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
