const express=require('express')
const PORT=55000;
const app=express();
app.use(express.json())//parse json

app.get("/",(req, res)=>{
    res.send("hello world,welcome")
})

app.listen(PORT,()=>{
    console.log(`success,running in http://localhost:${PORT}`)
})
