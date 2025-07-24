import { CreateConection } from '../connectToDB/creatConectMYSQL.js';
import jwt from 'jsonwebtoken';
import { LoginPlayer } from './addLogin.js';

const SECRET = 'your_jwt_secret_key';

export async function NewPlayer(name, role, res) {
    try {
        const connection = await CreateConection();

        const query = `INSERT INTO users (name, role) VALUES (?, ?)`;
        await connection.execute(query, [name, role]);


        const [newUserRows] = await connection.execute(
            `SELECT * FROM users WHERE name = ? AND role = ?`,
            [name, role]
        );

        await connection.end();

        const newUser = newUserRows[0];

        const token = jwt.sign(
            {
                id: newUser.id,
                name: newUser.name,
                role: newUser.role
            },
            SECRET,
            { expiresIn: '1h' }
        );




        console.log("creat token to new user");
        res.status(200).json({ token })

    } catch (err) {
        console.log('invalid  error', err);
        res.status(500).send('invalid error');
    }
}