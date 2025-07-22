import { CreateConection } from '../connectToDB/creatConectMYSQL.js';

export async function GetBestGameResultByUserName(req, res) {
    try {
        const name = req.body
        const connection = await CreateConection();

        const sql = `
            SELECT gr.id, u.name, gr.averge_time, gr.all_time
            FROM game_results gr
            JOIN users u ON gr.user_id = u.id
            WHERE u.name = ?
            ORDER BY gr.all_time ASC
            LIMIT 1
        `;

        const [results] = await connection.execute(sql, [name]);


        await connection.end();

        res.send(results)

    } catch (err) {

        console.error("invalid eroor", err);

    }
}
//הערות לא טופל סגירה בפיינלי למקרה שהוא לא יסגור
