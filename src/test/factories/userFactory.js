const userFactory = overrideProps => ({
  email: 'test@email.com',
  password: 'password',
  ...overrideProps
});

module.exports = userFactory;
