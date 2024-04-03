require('dotenv').config()

const express=require("express");
const app=express();
const PORT=3000;

app.get("/",(req,res)=>{
    res.send('Hello world')
});

app.get('/twitter', (req,res)=>{
    res.send("Listening On Twitter")
})

app.get('/login',(req,res)=>{
    res.send('Please Login To This Website')
})

app.get("/youtube",(req,res)=>{
    res.send('chai aur code')
})

app.get('/github',(req,res)=>{
    res.json({
            "login": "Niket-ketanbhai-Patadiya",
            "id": 121963451,
            "node_id": "U_kgDOB0UDuw",
            "avatar_url": "https://avatars.githubusercontent.com/u/121963451?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Niket-ketanbhai-Patadiya",
            "html_url": "https://github.com/Niket-ketanbhai-Patadiya",
            "followers_url": "https://api.github.com/users/Niket-ketanbhai-Patadiya/followers",
            "following_url": "https://api.github.com/users/Niket-ketanbhai-Patadiya/following{/other_user}",
            "gists_url": "https://api.github.com/users/Niket-ketanbhai-Patadiya/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Niket-ketanbhai-Patadiya/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Niket-ketanbhai-Patadiya/subscriptions",
            "organizations_url": "https://api.github.com/users/Niket-ketanbhai-Patadiya/orgs",
            "repos_url": "https://api.github.com/users/Niket-ketanbhai-Patadiya/repos",
            "events_url": "https://api.github.com/users/Niket-ketanbhai-Patadiya/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Niket-ketanbhai-Patadiya/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Niket Patadiya",
            "company": null,
            "blog": "",
            "location": null,
            "email": null,
            "hireable": null,
            "bio": null,
            "twitter_username": null,
            "public_repos": 17,
            "public_gists": 0,
            "followers": 0,
            "following": 2,
            "created_at": "2023-01-04T16:21:57Z",
            "updated_at": "2024-03-27T19:37:51Z"
          
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`App listening at PORT ${PORT}`);
})