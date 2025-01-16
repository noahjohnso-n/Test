import express from 'express';
import env from "dotenv";
import pg from "pg";
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

env.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
    connectionString: process.env.DB_URL
});
  
db.connect();

db.query("select * from users", (err, res) => {
    if(err){
        console.log("ERROR: " + err.stack);
    }else{
        const r = res.rows;
        console.log("OUTPUT: " + r.length);
        for(var i = 0 ; i < r.length ; i++){
            console.log(r[i].email);
        }
    }
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, (req, res) => {
    console.log(`Server now listening on port ${port}`);
})

// db.end;