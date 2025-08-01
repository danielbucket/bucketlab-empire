import jwt from 'jsonwebtoken';

function handler(req, res) {
  const { username, password } = req.body;

  if (password !== 'password') {
    return res.status(401).json({ error: 'Invalid password' });
  };

  const jwtSecretKey = process.env.JWT_SECRET_KEY;

  const data = {
    signInTime: Date.now(),
    username
  };

  const token = jwt.sign(data, jwtSecretKey, { expiresIn: '1h' });

  res.status(200).json({ message: 'Login successful', token });
};

export default handler;