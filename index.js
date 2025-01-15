import express from "express";

const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, (req, res) => {
    console.log(`Server now listening on port ${port}`);
})