import { CreateConection } from '../connectToDB/creatConnectMDB.js'


export async function Delete(req, res) {
    let clientClose;

    try {
        const id = req.params.id;
        console.log("delete riddle");
        
        const { client, collection } = await CreateConection('riddles');
        clientClose = client


        await collection.deleteOne({ id: id });

        res.status(200).json({message:"Delete successfully"});

    } catch (err) {
        console.error('invalid eroor /delete/:', err);

        res.status(500).json({message:err.message});

    } finally {
      if (clientClose)
        await clientClose.close();

    }
}

