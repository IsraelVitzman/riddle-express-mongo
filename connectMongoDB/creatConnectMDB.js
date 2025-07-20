import { MongoClient } from 'mongodb';

export async function CreateConection(table) {
    try {
        const uri = "mongodb+srv://iv058lv:YOUR_PASSWORD@cluster0.qvojuft.mongodb.net/DBGameRiddles?retryWrites=true&w=majority";




        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            tlsAllowInvalidCertificates: true,
        });


        await client.connect();

        const db = client.db('DBGameRiddles');

        const collection = db.collection(table);

        return { client, collection };

    } catch (err) {
        console.error(" MongoDB connection error:", err);
        throw err;
    }
}

