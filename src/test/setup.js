const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

const connect = async () => {
  const uri = await mongod.getConnectionString();

  const mongooseOpts = {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000
  };

  await mongoose.connect(uri, mongooseOpts);
}

const closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
}

const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (let key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
}

module.exports = {
  connect, closeDatabase, clearDatabase
}
