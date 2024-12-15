import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "notes_app",
  })
  .promise();

async function getUser(id) {
  const [rows] = await pool.query(`
    SELECT * FROM users
     WHERE id = ?
     `, [id]);
  return rows[0];
}

async function createUser(email, password) {
  const [rows] = await pool.query(`
    INSER INTO users (email, password)
    VALUES (?, ?)
    `,[email, password]
  );
  return rows[0];
}
