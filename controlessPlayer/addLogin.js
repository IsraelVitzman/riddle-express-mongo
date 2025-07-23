import { CreateConection } from '../connectToDB/creatConectMYSQL.js';
import { NewPlayer } from "./addSignUp.js";

import jwt from 'jsonwebtoken';

const SECRET = 'your_jwt_secret_key';

export async function LoginPlayer(req, res) {

    try {
        const {name, role} = req.body;

        if (!name || !role) {
            return res.status(400).send("Missing name or role");
        }

        const connection = await CreateConection();

        const query = `
          SELECT * FROM users WHERE name = ?
        `;

        const [rows] = await connection.execute(query, [name]);

        await connection.end();

        if (rows.length === 0) {
          return await NewPlayer(name,role ,res)
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

