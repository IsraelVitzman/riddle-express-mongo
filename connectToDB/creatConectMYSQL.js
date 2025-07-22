import mysql from 'mysql2/promise';

export async function   CreateConection() {
    try {

        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'usersRiddles'
        });

    } catch (error) {
        console.error(' error creating tables:', error);
    }
}

export async function CreateTables() {
    try {
        const tebleUsers = (`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE
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

        console.log("the teble creat seccussoflly");




    } catch (error) {

        console.error(' error creating tables:', error);
    }
}


