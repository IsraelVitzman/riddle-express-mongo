import mysql from 'mysql2/promise';

export async function CreateConection() {
    try {

        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'usersRiddles'
        });
        return connection
    } catch (error) {
        console.error(' error creating tables:', error);
    }
}

export async function CreateTables() {
    const connection = await CreateConection()
    try {
        const tebleUsers = (`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        role VARCHAR(100) NOT NULL 
        );
      `);



        const tebleResultGame = (`
      CREATE TABLE IF NOT EXISTS game_results (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        averge_time VARCHAR(100),
        all_time VARCHAR(100),
        
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
     `);
        await connection.query(tebleUsers);
        await connection.query(tebleResultGame);

        console.log("the teble creat seccussoflly");


        connection.end()

    } catch (error) {

        console.error(' error creating tables:', error);
    }
}


