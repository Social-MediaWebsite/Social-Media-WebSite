
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const expiresIn = 60 * 60 * 24; // 1 day in seconds
  const t = jwt.sign({ userId: req.params.id }, 'secretKey', { expiresIn: expiresIn });
  // console.log('t', t);
  if (!t) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  jwt.verify(t, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    // console.log('req', req.params);
    // console.log('decoded', decoded);
    req.params.id = decoded.userId; // Change this line if the property is 'id'
    next();
  });  
};

module.exports = {
  authenticateUser,
};
