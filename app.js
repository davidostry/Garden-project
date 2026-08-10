import express from 'express';

const app = express()

app.use(express.json())

app.get("/garden",(res, req)=>{
    res.send("hello from michal's garden")
})

app.listen(3000, () => {
    console.log ("listeninig on port 3000");
})