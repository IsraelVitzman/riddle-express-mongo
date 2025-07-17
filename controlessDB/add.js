import { CreateConection } from './CreateControles.js'



export async function add(req, res) {
    try {
        const body = req.body
        const { client, collection } = await CreateConection()

        await collection.insertOne(body)

        res.end('insert seccossflly')

        await client.close()

    } catch (err) {
        console.log(err);

    }

}

