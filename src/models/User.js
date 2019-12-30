const UserSchema = require('../schemas/UserSchema');

const create = async () => {
  const user = {
    email: 'email@example.com',
    password: 'Security'
  }

  await UserSchema.create(user)
}

module.exports = {
  create
}
