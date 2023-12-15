
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const expiresIn = 60 * 60; // 1 hour in seconds
  const t = jwt.sign( req.params.id , 'secretKey');
  console.log('t', t);
  if (!t) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  jwt.verify(t,'secretkey', (err, decoded) => {
    // if (err) {
    //   return res.status(401).json({ message: 'Invalid token' });
    // }
    // console.log('req',req.params);
    // console.log('decoded',decoded);
    //req.params.id = decoded.userId;
    next();
  });
};

module.exports = {
  authenticateUser,
};
