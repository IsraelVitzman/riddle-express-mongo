import { CreateConection } from '../connectMongoDB/creatConnectMDB.js'



export async function Update(req, res) {
    let clientClose;
    try {
        const id = req.params.id

        const body = req.body

        const { client, collection } = await CreateConection('riddles')

        clientClose = client

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
        if (clientClose)
            await clientClose.close()
    }
}
