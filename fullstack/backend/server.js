 import express from 'express';

 const app= express()

 

 app.get('/' ,(req,res) =>{
    res.send("Hello Full stack developer")
 });
 
 app.get('/api/jokes',(req,res) =>{
    const jokes={
  "jokes": [
            {
            "id": 1,
            "title": "Why don’t skeletons fight each other?",
            "content": "Because they don’t have the guts!"
            },
            {
            "id": 2,
            "title": "Why did the scarecrow win an award?",
            "content": "Because he was outstanding in his field!"
            },
            {
            "id": 3,
            "title": "What do you call cheese that isn't yours?",
            "content": "Nacho cheese!"
            },
            {
            "id": 4,
            "title": "Why couldn’t the bicycle stand up by itself?",
            "content": "Because it was two-tired!"
            },
            {
            "id": 5,
            "title": "Why did the math book look sad?",
            "content": "Because it had too many problems!"
            }
        ]
    };
    res.send(jokes)
 });
 
 const port=process.env.PORT || 3000

 app.listen(port ,() =>{
    console.log(`server is running on https://localhost:${port}`)
 });
