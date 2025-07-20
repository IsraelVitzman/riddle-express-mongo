import { CreateConection } from '../connectMongoDB/creatConnectMDB.js'


export async function deleteRiddle(req, res) {
    let client;

    try {
        const id = req.params.id;

        const connection = await CreateConection('riddles');
        client = connection.client;
        const collection = connection.collection;


        await collection.deleteOne({ id });

        res.status(200).send("Delete successfully");

    } catch (err) {
        console.error('invalid eroor /delete/:', err);
        res.status(500).send(err.message);

    } finally {

        await client.close();

    }
}

