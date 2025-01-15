import express from "express";
import env from "dotenv";
import pg from "pg";

const app = express();
const port = 3000;

env.config();

app.use(express.static("public"));

const db = new pg.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    ssl: { rejectUnauthorized: false }
});
  
db.connect();

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, (req, res) => {
    console.log(`Server now listening on port ${port}`);
})