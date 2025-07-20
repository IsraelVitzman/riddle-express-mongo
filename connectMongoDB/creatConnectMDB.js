import { MongoClient } from 'mongodb';

export async function CreateConection(table) {
    try {
        const uri = process.env.MONGO_DB
            ;

        const client = new MongoClient(uri);

        await client.connect();

        const db = client.db('DBGameRiddles');

        const collection = db.collection(table);

        return { client, collection };

    } catch (err) {
        console.error(" MongoDB connection error:", err);
        throw err;
    }
}

