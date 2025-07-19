import { CreateConection } from '../connectMongoDB/creatConnectMDB.js'



export async function update(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        const { client, collection } = await CreateConection('riddles')

        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: body }
        );

        res.end("update seccossflly")

        await client.close()

    } catch (err) {
        res.end(err);

    }

}
