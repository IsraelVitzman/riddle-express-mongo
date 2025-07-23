
import { CreateConection } from '../connectToDB/creatConectMYSQL.js'



export async function NewPlayer(req, res) {
    const SECRET = 'your_jwt_secret_key';
    try {

        const { name, role } = req.body;

        if (!name || !role) {
            return res.status(400).send("Missing name or role");
        }

        const connection = await CreateConection()

        const query = `

      INSERT INTO users (name,role)
      VALUES (?,?)
    `;

        const [result] = await connection.execute(query, [name, role]);

        console.log(result.insertId);

        await connection.end();



        const token = jwt.sign(
            { role: role },
            SECRET,
            { expiresIn: '1h' }
        );



        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
            sameSite: 'strict',
            secure: false

        });

        res.status(201).send("new user insert seccussoflly")
    } catch (err) {

        console.error('invalid eroor', err);

        res.status(500).send('invalid eroor')
    }
}


