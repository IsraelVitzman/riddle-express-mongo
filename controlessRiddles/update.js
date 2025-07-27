import { CreateConection } from '../connectToDB/creatConnectMDB.js'



export async function Update(req, res) {
    let clientClose;
    try {
        console.log("update riddle");
        
        const id = req.params.id

        const body = req.body

        const { client, collection } = await CreateConection('riddles')

        clientClose = client

        await collection.updateOne(
            { id: id },
            { $set: body }
        );

        

        await client.close()

    } catch (err) {
        console.error('invalid eroor: /update/', err);
        res.status(500).json({message:err.message});
    }
    finally {
        if (clientClose)
            await clientClose.close()
    }
}
