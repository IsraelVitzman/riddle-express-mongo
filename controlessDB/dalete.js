import { CreateConection } from './helpToControles.js'



export async function dalete(req, res) {
    try {
        const id = req.params.id

        const collection = await CreateConection()

        await collection.deleteOne(id)

        res.end("delete seccossflly")

        await client.close()



    } catch (err) {
        console.log(err);

    }

}
