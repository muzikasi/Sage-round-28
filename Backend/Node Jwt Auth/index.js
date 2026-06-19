import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { User } from "./model/user.js";
import jwt from "jsonwebtoken";
import { Book } from "./model/book.js";
const app = express()


mongoose.connect('mongodb+srv://sage:ycYE7xUw9Nn941n6@cluster0.pzsqnpm.mongodb.net/auth?appName=Cluster0')
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
            password: hashedPassword,
            role:"user"
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
    const token = jwt.sign({ id: user.id, fullname: user.fullname, userName: user.userName, role: user.role }, "2123")
    return res.status(200).json({
        message: "Login Completed!",
        token: token
    })
})

app.get('/books', auth, async (req, res) => {
    try {
        const book = await Book.find()
        return res.status(200).json(book)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error" })
    }
})

app.post('/books', auth, async (req, res) => {
    try {
        console.log(req.user)
        if(req.user.role!= "admin"){
            return res.status(400).json({message:"Not Permitted"})
        }
        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
        })
        await book.save()
        return res.status(201).json({ message: "Book Created!" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error" })
    }
})


app.put('/books/:id', auth, async (req, res) => {
    try {
        const existingBook = await Book.findById(req.params.id)
        if (!existingBook) {
            return res.status(404).json({ massage: "Book not found!" })
        }
        const book = await Book.findByIdAndUpdate(req.params.id,{ 
            title: req.body.title,
            author: req.body.author,
            price: req.body.price
        }, { new: true })
        return res.status(200).json({ massage: "Book Updated!" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error" })
    }
})

app.delete('/books/:id', auth ,async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
         if (!book) {
            return res.status(404).json({ message: "Book not found or already deleted!" });
        }
        return res.status(200).json({ massage: "Book Deleted and book name is: " + book.title })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error" })

    }
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