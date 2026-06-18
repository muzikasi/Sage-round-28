import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { User } from "./model/user.js";
import jwt from "jsonwebtoken";
const app = express()


mongoose.connect('mongodb://localhost:27017/Auth')
    .then(() => console.log("mongoose connected!"))
    .catch(err => console.log(err))

app.use(express.json())

app.post('/signup', async (req, res) => {
    try {
        const user = req.body
        const existingUser = await User.find({ userName: user.userName })
        if (existingUser != 0) {
            return res.status(400).json({ message: "Username aleardy taken!" })
        }

        const hashedPassword = await bcrypt.hash(user.password, 10)
        const newUser = new User({
            fullname: user.fullname,
            userName: user.userName,
            password: hashedPassword
        })
        await newUser.save()
        return res.status(201).json({ message: "Account Created!" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error" })
    }
})

app.post('/login', async (req, res) => {
    const { userName, password } = req.body
    const user = await User.findOne({ userName: userName })
    if (!user) {
        return res.status(400).json({ message: "incorrect username or password" })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(400).json({ message: "incorrect username or password!" })
    }
    const token = jwt.sign({ id: user.id, fullname: user.fullname, userName: user.userName, role: "admin" }, "2123")
    return res.status(200).json({
        message: "Login Completed!",
        token: token
    })
})

app.get('/books', auth, (req, res) => {
    return res.status(200).json(
        { message: "list of books for authorized user. your name is: " + req.user.fullname }
    )
})

function auth(req, res, next) {
    const token = req.headers['authorization']?.split(" ")[1]
    console.log(token)
    if (!token) return res.status(300).json({ message: "Not Authorized! " })
    jwt.verify(token, "2123", (err, decoded) => {
        if (err) return res.status(300).json({ message: "Invalid token" })
        req.user = decoded
        next();
    })
}

app.listen(3000, () => {
    console.log("Server is running in port 3000")
})