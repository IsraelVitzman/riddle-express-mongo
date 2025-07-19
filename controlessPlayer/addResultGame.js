import { CreateConection } from '../connectMongoDB/creatConnectMDB.js'

export async function AddResult(req, res) {
    try {
        const { name, avergeTime, allTime } = req.body

        const players = await CreateConection('player')

        const player = await players.collection.findOne({ name });
        const playerId = player._id;

        const result = {
            playerId,
            name,
            avergeTime,
            allTime
        }

        const resultGams = await CreateConection('resultGams')
        await resultGams.collection.insertOne(result);

        res.end('insert seccossflly')



    } catch (err) {
        res.end(err)

    } finally {
        await players.client.close()
        await resultGams.client.close()
    }

}