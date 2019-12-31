const User = require('../models/User');

const index = async (req, res) => {
  res.send('Hello world!')

  try {
    await User.create()
  } catch (error) {
    console.error(error)
  }

  console.log('Sample user created!')
}

module.exports = {
  index
}
