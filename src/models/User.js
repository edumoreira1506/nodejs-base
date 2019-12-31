const UserSchema = require('../schemas/UserSchema');

const create = async () => {
  const user = {
    email: 'email@example.com',
    password: 'Security'
  }

  try {
    await UserSchema.create(user)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  create
}
