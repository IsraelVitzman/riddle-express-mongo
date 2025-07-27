import { CreateConection } from '../connectToDB/creatConectMYSQL.js';
import jwt from 'jsonwebtoken';


const SECRET = 'your_jwt_secret_key';

export async function NewPlayer(name, password, role, res) {
    try {
        const connection = await CreateConection();

        const query = `INSERT INTO users (name,password,role) VALUES (?, ?,?)`;
        await connection.execute(query, [name, password, role]);


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

        console.log(`login successful: ${newUser.name} (${newUser.role})`);
        console.log(`token sent in token: ${token.substring(0, 20)}...`);

        res.status(200).json({ "token": token, message: `welcome new user${newUser.name}`})

    } catch (err) {
        console.log('invalid  error', err);
        res.status(500).json({message:'invalid error'});
    }
}