import { CreateConection } from '../connectToDB/creatConectMYSQL.js';

export async function GetBestGameResultByUserName(req, res) {
    let connection;
    try {
        const name = req.params.name
       

        if (!name) return res.status(400).send("no name")
        connection = await CreateConection();

        const sql = `
            SELECT gr.id, u.name, gr.averge_time, gr.all_time
            FROM game_results gr
            JOIN users u ON gr.user_id = u.id 
            WHERE u.name = ?
            ORDER BY gr.all_time ASC
            LIMIT 1
        `;

        const [results] = await connection.execute(sql, [name]);

        res.send(results);

    } catch (err) {

        console.error("invalid eroor", err);

        res.status(500).send('internal error');

    } finally {

        if (connection) await connection.end();
    }
}
