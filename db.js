import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://xtravconf:kz9xlvlISMoRu2LP@vconf.t3gj8dx.mongodb.net/?retryWrites=true&w=majority&appName=vconf";

async function db(collectionName, query) {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to the MongoDB Atlas cluster
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Specify the database and collection you want to use
    const database = client.db("xtra");
    const collection = database.collection(collectionName);
    const result = await query(collection);

    return result;

  } catch (err) {
    console.error("Error occurred:", err);
  } finally {
    // Close the connection when finished
    await client.close();
    console.log("Connection closed");
  }
}

export default db;