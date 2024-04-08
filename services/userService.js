import db from "../db.js";

const USER_COLLECTION = "user";

export const findUser = async (email, password) => {
  try {
    async function _find(collection) {
      const query = { email, password };
      const options = { projection: { _id: 0, email: 1, name: 1 } };
      return await collection.findOne(query, options);
    }
    const result = await db(USER_COLLECTION, _find);
    console.log(result);
    return result;
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
};

//name, email, pass
export const addUser = async (user) => {
  try {
    async function _create(collection) {
      return await collection.insertOne(user);
    }
    const result = await db(USER_COLLECTION, _create);
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
};
