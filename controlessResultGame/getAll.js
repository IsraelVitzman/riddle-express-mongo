import { CreateConection } from '../connectToDB/creatConectMYSQL.js';


export async function GetBestResultsForAllUsers(req, res) {
    try {
        const connection = await CreateConection();
        console.log("Get Best Results For All Users");
   
        const [users] = await connection.execute('SELECT name FROM users');

        const results = [];


        for (const user of users) {
            const bestResult = await GetBestGameResultByUserNameRaw(user.name);
            if (bestResult) {
                results.push(bestResult);
            }
        }

        res.json({results})
    } catch (err) {
        console.error('Error getting best results for all users:', err);
        throw err;

    }finally{
        if(connection)await connection.end();
    }
}

export async function GetBestGameResultByUserNameRaw(name) {
    const connection = await CreateConection();
    try {
        const sql = `
            SELECT gr.id, u.name, gr.averge_time, gr.all_time
            FROM game_results gr
            JOIN users u ON gr.user_id = u.id
            WHERE u.name = ?
            ORDER BY gr.all_time ASC
            LIMIT 1
        `;
        const [results] = await connection.execute(sql, [name]);
        return results[0];

    } catch (err) {

        console.error("Error:", err);
        return null;

    } finally {
        await connection.end();
    }
}
