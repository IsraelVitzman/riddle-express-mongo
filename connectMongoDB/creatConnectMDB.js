import { MongoClient } from 'mongodb';

export async function CreateConection(table) {
    try {
        const uri = 'mongodb+srv://iv058lv:0GtoJRS1bylHZF9R@cluster0.hyvelxx.mongodb.net/?retryWrites=true&w=majority';

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

