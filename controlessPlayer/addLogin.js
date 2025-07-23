import { CreateConection } from '../connectToDB/creatConectMYSQL.js';
import jwt from 'jsonwebtoken';

const SECRET = 'your_jwt_secret_key';

export async function LoginPlayer(req, res) {
    try {
        const { name } = req.body;

        const connection = await CreateConection();

        const query = `
          SELECT * FROM users WHERE name = ?
        `;

        const [rows] = await connection.execute(query, [name]);

        await connection.end();

        if (rows.length === 0) {
            return res.status(404).send("User not found");
        }

        const user = rows[0];


        const token = jwt.sign(
            { role: user.role },
            SECRET,
            { expiresIn: '1h' }
        );


        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
            secure: false
        });

        res.status(200).send(`welcome back ${user.name}, you are logged in as ${user.role}`);
    } catch (err) {
        console.error("Login error", err);
        res.status(500).send("Server error");
    }
}
