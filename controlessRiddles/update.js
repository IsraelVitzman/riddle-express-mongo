import { CreateConection } from '../connectMongoDB/creatConnectMDB.js'



export async function update(req, res) {
    let client;
    try {
        const id = req.params.id

        const body = req.body

        const collection = await CreateConection('riddles')
        
        client = collection.client;

        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: body }
        );

        res.end("update seccossflly")

        await client.close()

    } catch (err) {
        console.error('invalid eroor: /update/', err);
        res.status(500).send(err.message);
    }
    finally {
        await client.close()
    }
}
