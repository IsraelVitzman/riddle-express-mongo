import { CreateConection } from '../connectToDB/creatConectMYSQL.js';

export async function NewPlayer(name,role ,res) {
    const SECRET = 'your_jwt_secret_key';
    try {
        
        const connection = await CreateConection()

        const query = `
        INSERT INTO users (name,role)
        VALUES (?,?)
       `;
        await connection.execute(query, [name, role]);
        
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