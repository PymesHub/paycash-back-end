// commandClient.ts - Para manejar solo comandos (Escrituras)
import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST_READ,
  user: process.env.DB_USER_READ,
  password: process.env.DB_PASSWORD_READ,
  database: process.env.DB_NAME_READ,
  port: Number(process.env.DB_PORT_READ),
};

const connectionRead = mysql.createPool(dbConfig);

export { connectionRead };
