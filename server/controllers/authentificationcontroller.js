const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { addOne, getByEmail } = require('./users.controllers');

const generateToken = (userId, userName) => {
  return jwt.sign({ userId, userName }, 'secretKey', { expiresIn: '1h' });
};

const registerUser = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const newUser = {
      userName,
      userEmail,
      userPassword: hashedPassword,
      userImage: 'https://shorturl.at/egA37',
    };
    

    // Call addOne with req and res
    addOne({ body: newUser }, res);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
};


const loginUser = async (req, res) => {
  const { userEmail, userPassword } = req.body;

  try {
    getByEmail({ params: { email: userEmail } }, res, async (err, user) => {
      if (err) {
        res.status(500).json({ error: 'Error' });
      } else if (!user) {
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        const passwordMatch = await bcrypt.compare(userPassword, user.userPassword);

        if (passwordMatch) {
          const token = generateToken(user.userId, user.userName);
          res.json({ token });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
