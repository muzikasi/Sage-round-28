const express = require('express')

const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    return res.send("welcome")
})

app.post("/login",(req,res)=>{
    return res.send("Login Completed")
})


app.put("/users",(req,res)=>{
    return res.send("User updated")
})

app.delete("/users",(req,res)=>{
    return res.send("User Deleted")
})


//params
app.delete("/users/:id",(req,res)=>{
    return res.send("user Deleted with ID " + req.params.id)
})

//Query
app.get("/search",(req,res)=>{
    return res.send("Searching "+ req.query.q + " and " + req.query.z)
})
//body
app.post("/users",(req,res)=>{
    const user =req.body;
    return res.send("user created with fullname: "+ user.firstName + " " + user.lastName )
})
app.listen(3000,()=>{
    console.log("Server started on port 3000")
})


