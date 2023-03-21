import mysql from "mysql"

export const db= mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"utkarshjay123",
    database:"blog"
})