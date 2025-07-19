import { CreateConection } from '../connectMongoDB/creatConnectMDB.js'



export async function dalete(req, res) {
    try {
        const id = req.params.id

        const collection = await CreateConection('riddles')

        await collection.deleteOne(id)

        res.end("delete seccossflly")

        await client.close()



    } catch (err) {
        res.end(err);

    }

}
