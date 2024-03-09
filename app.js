const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const contactsRouter = require("./app/routes/contact.route");
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "welcome to  contact book application" })
});
app.use("/api/contacts", contactsRouter);
module.exports = app;