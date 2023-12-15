const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { addOne} = require('./users.controllers');
const connection =require('../database-mysql/index')

const generateToken = (userId, userName) => {
  return jwt.sign({ userId, userName }, 'secretKey', { expiresIn: '2h' });
};


const registerUser = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const newUser = {
      userName,
      userEmail,
      userPassword: hashedPassword,
      userImage: 'no content',
    };
    

    addOne({ body: newUser }, res);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
};


const loginUser = async (req, res) => {
  console.log("requuuuu",req.body);
  const { userEmail, userPassword } = req.body;
  
  const sql = 'SELECT * FROM users WHERE userEmail = ?';
  connection.query(sql, [userEmail],async (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error' });
    } else {
      const user = result[0];
      const passwordMatch = await bcrypt.compare(userPassword, user.userPassword);

        if (passwordMatch) {
          const user = result[0];
          console.log('user: ', user);
          const token = generateToken(user.userId, user.userName);
          // console.log("token : ",token);
          res.json({ token, userId: user.userId});
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
    }
  });
};

module.exports = {
  registerUser,
  loginUser,
};
