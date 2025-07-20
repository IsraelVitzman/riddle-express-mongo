import { CreateConection } from '../connectMongoDB/creatConnectMDB.js';

export async function NewPlayer(req, res) {
    let clientClose;

    try {
        const body = req.body;

        const {client,connection} = await CreateConection('player');

        clientClose=client


        await connection.insertOne(body);

        res.status(201).send('insert successfully');

    } catch (err) {
        console.error(' invalid eroor: /addnewplayer/ :', err);
        res.status(500).send(err.message);
    } finally {

        if (client) {
            await clientClose.close();
        }
    }
}
