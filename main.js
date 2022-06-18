const 
    port = 5000,
    express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    dbName = "meet_mauricia",
    usersController = require("./controllers/usersController");

mongoose.connect(
    `mongodb://localhost:27017/${dbName}`,
    {useNewURLParser: true}
)

const db = mongoose.connection;

db.once("open", () => {
    console.log(`\n\t-> Connected to '${dbName}' Database`);
})

app.use(
    express.urlencoded({
        extended: false
    })
)
app.use(express.json());
app.set("view engine", "ejs")
app.use(express.static("public"))


/* --------------- Get requests --------------- */

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/services", (req, res) => {
    res.render("services")
})

app.get("/form", (req, res) => {
    res.render("form")
})

app.post("/contact", usersController.createUser, usersController.redirectUser);

app.listen(port, () => 
console.log(`\n\t-> Server running on ${port}` +  `\n\n\t-> http://localhost:${port}`))