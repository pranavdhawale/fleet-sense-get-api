const express = require("express");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const cors = require("cors");

const app = express();

app.use(cors());

const port = process.env.port || 8000;

app.get("/api/data", async (req, res) => {
  const client = await MongoClient.connect(
    "mongodb+srv://data_IT:data_IT@apmldatabase.len4pkp.mongodb.net/test",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const coll = client.db("IOT").collection("finaliot");
  const data = await coll.find({});
  const result = await data.toArray();
  await client.close();

  res.send(result);
});

app.listen(port, function () {
  console.log("Server running on port: ", port);
});
