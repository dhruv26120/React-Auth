const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Get token from headers
  const token = req.header('Authorization')?.split(' ')[1]; // Expects "Bearer <token>"

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
