// commandClient.ts - Para manejar solo comandos (Escrituras)
import mysql from "mysql2";

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
};

const connection = mysql.createPool(dbConfig);
