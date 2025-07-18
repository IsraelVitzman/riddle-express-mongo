import { MongoClient } from 'mongodb'

export async function CreateConection(teblle) {
    try {

        const uri = 'mongodb+srv://iv058lv:0GtoJRS1bylHZF9R@cluster0.hyvelxx.mongodb.net/?retryWrites=true&w=majority';

        const client = new MongoClient(uri)

        await client.connect()

        const db = client.db('DBGameRiddles')

        const collection = db.collection(teblle)

        return { client, collection };




    } catch (err) {
        console.log(err);

    }

}