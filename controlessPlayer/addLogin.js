import { CreateConection } from '../connectToDB/creatConectMYSQL.js';
import { NewPlayer } from "./addSignUp.js";
import jwt from 'jsonwebtoken';

const SECRET = 'your_jwt_secret_key';

export async function LoginPlayer(req, res) {
    try {
        const { name,password, role } = req.body;
        console.log("Login Player");
        
        if (!name || !password) {
            return res.status(400).json({message:"Missing name or password"});
        }

        const connection = await CreateConection();

        const query = `SELECT * FROM users WHERE name = ? AND password = ?`;
        const [rows] = await connection.execute(query, [name ,password]);


       

        if (rows.length === 0) {
            return await NewPlayer(name,password, role, res);
        }

        const user = rows[0]


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
        console.log(`token sent in token: ${token.substring(0, 20)}...`);

       
        res.status(200).json({ "token":token, message:`welcome${user.name}`})


    } catch (err) {
        console.error("Login error", err);
        res.status(500).json({message:"Server error"});
    }finally{
        if(connection)await connection.end();
    }
}
