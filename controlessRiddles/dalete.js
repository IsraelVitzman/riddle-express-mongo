import { CreateConection } from '../connectMongoDB/creatConnectMDB.js'


export async function Delete(req, res) {
    let clientClose;

    try {
        const id = req.params.id;

        const { client, connection } = await CreateConection('riddles');
        clientClose = client



        await connection.deleteOne({ id });

        res.status(200).send("Delete successfully");

    } catch (err) {
        console.error('invalid eroor /delete/:', err);
        res.status(500).send(err.message);

    } finally {

        await clientClose.close();

    }
}

