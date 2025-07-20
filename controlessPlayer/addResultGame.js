import { CreateConection } from '../connectMongoDB/creatConnectMDB.js'

export async function AddResult(req, res) {
    let players, resultGams;

    try {
        const { name, avergeTime, allTime } = req.body;

        players = await CreateConection('player');

        const player = await players.collection.findOne({ name });
        const playerId = player._id;

        const result = {
            playerId,
            name,
            avergeTime,
            allTime
        };

        resultGams = await CreateConection('resultGams');
        await resultGams.collection.insertOne(result);

        res.status(201).send('insert seccossflly');

    } catch (err) {

        console.error('invalid eroor: /addResultGame/:', err);
        res.status(500).send(err.message);

    } finally {

        await players.client.close();
        await resultGams.client.close();

    }
}
