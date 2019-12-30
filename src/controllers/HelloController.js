const User = require('../models/User');

const index = async (req, res) => {
  res.send('Hello world!')

  await User.create()

  console.log('Sample user created!')
}

module.exports = {
  index
}
