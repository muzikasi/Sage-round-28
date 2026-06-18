const express = require('express')

const app = express()

app.use(express.json())

let books = [
    {
        id:1,
        title:"48 laws of power",
        author:"abebe",
        price:"$400"
    },
    {
        id:2,
        title:"Think and Grow Rich",
        author:"sara",
        price:"$200"
    }
];

app.use((req,res,next) =>{
    console.log(req.method)
    console.log(req.url)
    next()
})

app.get('/books',(req,res)=>{
    return res.status(200).json(books)
})

app.post('/books',(req,res)=>{
    const book =req.body;
    book.id = books.length + 1
    books.push(book)
    return res.status(201).json(book)
})


// PUT
app.put('/books/:id', (req, res) => {
  const book = books.find((b)=>b.id == req.params.id)
  book.title =req.body.title
  book.author =req.body.author
  book.price =req.body.price
    if(!books) return res.status(200).json({massage:"Book not found"})
  return res.status(200).json(book)
});


app.delete("/books/:id",(req,res)=>{
    books =books.filter(b=>(b.id != req.params.id))
    return res.status(200).json({massage:"Book Deleted"})
})


app.use((req,res,next)=>{
    return res.status(404).json ({massage:"Route not found"})
})

app.listen(3000,()=>{
    console.log("Server is runing on port 3000")
})
