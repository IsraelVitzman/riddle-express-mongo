
import { CreateConection } from '../connectToDB/creatConectMYSQL.js'



export async function NewPlayer(req, res) {

    try {

        const name = req.body

        const connection = await CreateConection()

        const query = `

      INSERT INTO users ( name)
      VALUES (?)
    `;

        const [result] = await connection.execute(query, [name]);

        console.log(result.insertId);

        await connection.end();

        res.status(201).send("new user insert seccussoflly")
    } catch (err) {

        console.error('invalid eroor', err);

        res.status(500).send('invalid eroor')
    }
}


