import { CreateConection } from '../connectMongoDB/creatConnectMDB.js';

export async function NewPlayer(req, res) {
    let client;

    try {
        const body = req.body;

        const connection = await CreateConection('player');

        client = connection.client;

        const collection = connection.collection;

        await collection.insertOne(body);

        res.status(201).send('insert successfully');

    } catch (err) {
        console.error(' invalid eroor: /addnewplayer/ :', err);
        res.status(500).send(err.message);
    } finally {

        if (client) {
            await client.close();
        }
    }
}
