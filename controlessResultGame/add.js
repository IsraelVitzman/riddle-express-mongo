
import { CreateConection } from '../connectToDB/creatConectMYSQL.js'



export async function InsertGameResult(req, res) {

    try {

        const { user_id, avergeTime, allTime } = req.body

        const connection = await CreateConection()

        const [users] = await connection.execute(

            'SELECT id FROM users WHERE id = ?',
            [user_id]
        );

        if (users.length === 0) {
            return res.status(404).send('User not found');
        }

        const query = `
        
          INSERT INTO game_results  (user_id, average_time, all_time)
          VALUES (?,?,?)               
          `;

        const [result] = await connection.execute(query, [user_id, avergeTime, allTime]);

        console.log(result.insertId);

        await connection.end();

        res.status(201).send("game results insert seccussoflly")
    } catch (err) {

        console.error('invalid eroor', err);
        res.status(500).send('invalid eroor')
    }
}

