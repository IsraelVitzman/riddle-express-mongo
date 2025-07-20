import { CreateConection } from '../connectMongoDB/creatConnectMDB.js';

export async function add(req, res) {
    let client;
    try {

        const body = req.body;

        console.log(body);

        const connection = await CreateConection('riddles');

        client = connection.client;

        const collection = connection.collection;

        await collection.insertOne(body);

        res.status(201).send('insert successfully');

    } catch (err) {
        console.error(' invalid eroor /add/:', err);
        res.status(500).send(err.message);
    } finally {

        await client.close();

    }
}
