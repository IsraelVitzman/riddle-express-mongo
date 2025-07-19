import { CreateConection } from '../connectMongoDB/creatConnectMDB.js';



export async function read(req, res) {

    try {
        const { client, collection } = await CreateConection('riddles')

        const result = await collection.find().toArray();

        res.json(result)

        await client.close()

    } catch (err) {
        res.end(err);

    }

}
