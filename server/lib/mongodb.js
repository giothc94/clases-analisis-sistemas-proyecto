const MongoClient = require("mongodb").MongoClient;

const URL = "mongodb://localhost:27017";
const dbName = "ecommerce";

const Mongo = async () =>
  new Promise((resolve, reject) => {
    MongoClient.connect(URL, (error, client) => {
      if (error) reject(error);
      else resolve(client.db(dbName));
    });
  });

module.exports = Mongo;
