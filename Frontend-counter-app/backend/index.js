require('dotenv').config()
const express= require('express')
const app= express()


const port=process.env.PORT || 3000;

// const myData= {
//   "login": "suyog-dighe",
//   "id": 114413379,
//   "node_id": "U_kgDOBtHPQw",
//   "avatar_url": "https://avatars.githubusercontent.com/u/114413379?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/suyog-dighe",
//   "html_url": "https://github.com/suyog-dighe",
//   "followers_url": "https://api.github.com/users/suyog-dighe/followers",
//   "following_url": "https://api.github.com/users/suyog-dighe/following{/other_user}",
//   "gists_url": "https://api.github.com/users/suyog-dighe/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/suyog-dighe/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/suyog-dighe/subscriptions",
//   "organizations_url": "https://api.github.com/users/suyog-dighe/orgs",
//   "repos_url": "https://api.github.com/users/suyog-dighe/repos",
//   "events_url": "https://api.github.com/users/suyog-dighe/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/suyog-dighe/received_events",
//   "type": "User",
//   "user_view_type": "public",
//   "site_admin": false,
//   "name": "Suyog Dighe",
//   "company": "Sanjivani College Of Engineering, Kopargaon ",
//   "blog": "https://suyog-dighe.github.io/My_portfolio/",
//   "location": "Kopargaon ",
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 14,
//   "public_gists": 0,
//   "followers": 35,
//   "following": 18,
//   "created_at": "2022-09-26T13:25:55Z",
//   "updated_at": "2025-01-15T02:33:47Z"
// }

app.get('/',(req,res)=> {
    res.send("Suyog Dighe Hacker hai bhai hacker....!!")
})

// app.get('/login',(req,res)=>{
//     res.send("suyogdighe.com")
// })
// app.get('/register' ,(req,res) =>{
//     res.send("registration done successfully")
// })

// app.get('/github',(req,res) =>{
//     res.json(myData)
// })

app.get('/api/form',(req,res)=>{
    const data = {
        name: "suyog",
        mail: "suyog@gmail.com"
    };
    res.json(data);
})

app.listen(port, () =>{
    console.log(`Example App listening on port ${port}`)
})