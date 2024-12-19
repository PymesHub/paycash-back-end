// queryClient.ts - Para manejar solo consultas (Lecturas)
import mysql from "mysql2";

const dbConfig = {
  host: process.env.DB_HOST_READ,
  user: process.env.DB_USER_READ,
  password: process.env.DB_PASSWORD_READ,
  database: process.env.DB_NAME_READ,
  port: Number(process.env.DB_PORT_READ),
};

const connection = mysql.createPool(dbConfig);

const getAllRecords = () => {
  return new Promise<any[]>((resolve, reject) => {
    connection.execute("SELECT * FROM users", (err, results: any[]) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const getRecordById = (id: number) => {
  return new Promise<any[]>((resolve, reject) => {
    connection.execute(
      "SELECT * FROM users WHERE id = ?",
      [id],
      (err, results: any[]) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      }
    );
  });
};

export { getAllRecords, getRecordById };
