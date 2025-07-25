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

        const query = `SELECT * FROM users WHERE name = ?`;
        const [rows] = await connection.execute(query, [name]);
        await connection.end();

        if (rows.length === 0) {
            return await NewPlayer(name, role, res);
        }

        const user = rows[0];

        const token = jwt.sign(
            { 
                id: user.id,
                name: user.name,
                role: user.role 
            },
            SECRET,
            { expiresIn: '1h' }
        );

        
        

        console.log(`login successful: ${user.name} (${user.role})`);
        console.log(`token sent in cookie: ${token.substring(0, 20)}...`);
        
        console.log("created token for user");
        res.status(200).json({token})
            

    } catch (err) {
        console.error("Login error", err);
        res.status(500).send("Server error");
    }
}
