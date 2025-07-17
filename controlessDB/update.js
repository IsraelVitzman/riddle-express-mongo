import { CreateConection } from './helpToControles.js'



export async function update(req, res) {
    try {
        const id = req.params.id
        const body = req.body
        const { client, collection } = await CreateConection()

        await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: body }
        );

        res.end("update seccossflly")

        await client.close()

    } catch (err) {
        console.log(err);

    }

}
