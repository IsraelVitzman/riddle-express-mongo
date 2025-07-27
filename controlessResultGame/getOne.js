import { CreateConection } from '../connectToDB/creatConectMYSQL.js';

export async function GetBestGameResultByUserName(req, res) {
    let connection;
    try {
        const name = req.params.name
        console.log("Get Best Game Result By User Name" ,name);
        

        if (!name) return res.status(400).json({message:"no name"})
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

        res.json({results});

    } catch (err) {

        console.error("invalid eroor", err);

        res.status(500).json({message:'internal error'});

    } finally {

        if (connection) await connection.end();
    }
}
