const dbMock = require('../setup');
const userFactory = require('../factories/userFactory');
const userSchema = require('../../schemas/UserSchema');

describe('product ', () => {
  let user;

  beforeAll(async () => await dbMock.connect());

  beforeEach(() => {
    user = userFactory();
  });

  afterEach(async () => await dbMock.clearDatabase());

  afterAll(async () => await dbMock.closeDatabase());

  it('can be created correctly', async () => {
    expect(async () => await userSchema.create(user))
      .not
      .toThrow();
  });
});
