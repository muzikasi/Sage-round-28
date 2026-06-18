import express from 'express'
import mongoose from 'mongoose';
import { Book } from './model/book.js';

const app = express();

mongoose.connect('mongodb://localhost:27017/bookStore')
.then(()=>console.log('Mongodb connected'))
.catch((err)=>console.log(err))

app.use(express.json())

app.get('/books', async (req,res)=>{
    const books = await Book.find()
    return res.status(200).json(books)
})

app.get('/books/search', async (req,res)=>{
    const books = await Book.find({publicationYear:{$gte: req.query.year}})
    return res.status(200).json(books)
})

app.get('/books/:id', async (req,res)=>{
    try{
    const book = await Book.findById(req.params.id)
    return res.status(200).json(book)
    }catch(err){
        console.log(err)
        return res.status(404).json({massage:"Internal Server Error"})

    }
})

app.post('/books', async (req, res)=>{
    const book = new Book(req.body)
    await book.save()
    return res.status(201).json(book)
})

app.put('/books/:id', async (req,res)=>{
    const existingBook = await Book.findById(req.params.id)
    if(!existingBook){
        return res.status(404).json({massage:"Book not found!"})
    }
    const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).json(book)
})

app.delete('/books/:id', async (req, res)=>{
    const book = await Book.findByIdAndDelete(req.params.id)
    return res.status(200).json({massage:"Book Deleted"})
})


app.listen(3000,()=>{
    console.log("Serever started on port 3000")
})