import { MongoClient } from "mongodb";

// define functions that becomes API routes that return JSON which is serve side code

// NAME will become path segments in the URL

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;
    //store them in a database

    const client = await MongoClient.connect(
      "mongodb+srv://ompa:tAMplYbZrNcq4LAc@cluster0.pjpgz.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
