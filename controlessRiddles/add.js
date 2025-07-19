import { CreateConection } from '../connectMongoDB/creatConnectMDB.js'

export async function add(req, res) {
    try {
        const body = req.body
        console.log(body);
        
        const { client, collection } = await CreateConection('riddles')

        await collection.insertOne(body)

        res.end('insert seccossflly')
        
        await client.close()

    } catch (err) {
        res.end(err);

    }

}
