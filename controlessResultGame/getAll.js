import { CreateConection } from '../connectToDB/creatConectMYSQL.js';
import { GetBestGameResultByUserName } from './getOne.js';

export async function GetBestResultsForAllUsers(req, res) {
    try {
        const connection = await CreateConection();

        const [users] = await connection.execute('SELECT name FROM users');

        const results = [];


        for (const user of users) {
            const bestResult = await GetBestGameResultByUserName(user.name);
            if (bestResult) {
                results.push(bestResult);
            }
        }

        await connection.end();


        res.send(results)
    } catch (err) {
        console.error('Error getting best results for all users:', err);
        throw err;
    }
}
//הערות לא טופל סגירה בפיינלי למקרה שהוא לא יסגור