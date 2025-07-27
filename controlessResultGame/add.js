import { CreateConection } from '../connectToDB/creatConectMYSQL.js';

export async function InsertGameResult(req, res) {
    try {
        const { name, avergeTime, allTime } = req.body;
        
        console.log("Insert Game Result",name, avergeTime, allTime);
        
        const connection = await CreateConection();

        const [users] = await connection.execute(
            'SELECT id FROM users WHERE name = ?',
            [name]
        );

        if (users.length === 0) {
            return res.status(404).json({message:'User not found'});
        }

        const user_id = users[0].id;

        const query = `
            INSERT INTO game_results (user_id,averge_time, all_time)  
            VALUES (?, ?, ?)
        `;

        const [result] = await connection.execute(query, [user_id, avergeTime, allTime]);

        console.log(result.insertId);

        await connection.end();

        res.status(201).json({message:"game results insert seccussoflly"});
    } catch (err) {
        console.error('invalid eroor', err);
        res.status(500).json({message:'invalid eroor'});
    }
}


