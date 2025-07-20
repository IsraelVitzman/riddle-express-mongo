import { CreateConection } from '../connectMongoDB/creatConnectMDB.js';



export async function ReadAllResultGame(req, res) {
    let clientClose
    try {
        const { client, collection } = await CreateConection('resultGams')
        clientClose = client;

        const result = await collection.find().toArray();

        res.status(200).json(result);


    } catch (err) {
        console.error('invalid eroor /ReadAllPlayers/:', err);
        res.status(500).send(err.message);


    }
    finally {
        if (clientClose)
            await clientClose.close()
    }

}