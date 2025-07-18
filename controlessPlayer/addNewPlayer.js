import { CreateConection } from '../connectMongoDB/creatConnectMDB.js'

export async function NewPlayer(req, res) {
    try {
        const body = req.body
        const { client, collection } = await CreateConection('player')

        await collection.insertOne(body)

        res.end('insert seccossflly')

        await client.close()

    } catch (err) {
        console.log(err);

    }

}