import { CreateConection } from './helpToControles.js'



export async function read(req, res) {

    try {
        const { client, collection } = await CreateConection()

        const result = await collection.find().toArray();

        res.json(result)

        await client.close()

    } catch (err) {
        console.log(err);

    }

}
