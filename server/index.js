const express = require("express");
const cors = require('cors')
const userRouter = require('./routes/users.routes.js')
const authController = require('./controllers/authentificationcontroller.js')

const db = require('./database-mysql');
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())

//authentification routes
app.post('/register', authController.registerUser);
app.post('/login', authController.loginUser);

//user routes
app.use("/api/socialMedia", userRouter);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
