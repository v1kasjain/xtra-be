export const findUsers = async (collection) => {
  return await collection.find({}).toArray(); // Example query to find all documents
};

export const createHost = async (collection) => {
  return await collection.find({}).toArray();
};
