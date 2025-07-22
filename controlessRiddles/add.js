import { CreateConection } from '../connectToDB/creatConnectMDB.js'
export async function Add(req, res) {
    let clientClose;
    try {

        const body = req.body;

        console.log(body);

        const { client, collection } = await CreateConection('riddles');

        clientClose = client


        await collection.insertOne(body);

        res.status(201).send('insert successfully');

    } catch (err) {
        console.error(' invalid eroor /add/:', err);
        res.status(500).send(err.message);
    } finally {

        await clientClose.close();

    }
}
