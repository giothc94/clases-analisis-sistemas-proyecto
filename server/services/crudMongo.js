const Mongo = require("../lib/mongodb");

const create = async (data) => {
  let db = await Mongo();
  let result = await db.collection("products").insertOne(data);
  return result;
};

const update = async () => {};

const deleteDoc = async () => {};

const get = async () => {};

const getAll = async () => {};

module.exports = {
  create
}
