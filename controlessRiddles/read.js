import { CreateConection } from '../connectMongoDB/creatConnectMDB.js';



export async function read(req, res) {
    let client
    try {
        const collection = await CreateConection('riddles')
        client = collection.client;

        const result = await collection.find().toArray();

        res.status(200).json(result);

        await client.close()

    } catch (err) {
        console.error('invalid eroor /read/:', err);
        res.status(500).send(err.message);


    }
    finally {
        await client.close()
    }

}
