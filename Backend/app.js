const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const mongoURL = "mongodb+srv://admin:admin@cluster0.hie9q40.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database Connected");
    })
    .catch((e) => {
        console.error("Database connection error:", e);
    });

require("./UserDetail");
const User = mongoose.model("UserInfo");

app.get("/", (req, res) => {
    res.send({ status: "started" });
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(400).send({ status: "Error", data: "User already exists!" });
        }

        await User.create({
            name,
            email,
            password
        });
        res.send({ status: "Success", data: "User Created" });
    } catch (error) {
        console.error("Error during user creation:", error);
        res.status(500).send({ status: "Error", data: "User creation failed!" });
    }
});

app.listen(2000, () => {
    console.log("Server is started on port 2000");
});
