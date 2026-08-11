import express from 'express';

const app = express()

app.use(express.json())

app.use(express.urlencoded())

app.post("/garden",(req, res)=>{
    res.send("hello from michal's garden")
})

app.listen(3000, () => {
    console.log ("listeninig on port 3000");
})