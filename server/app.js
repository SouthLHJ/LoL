import express from 'express';
import fetch from "node-fetch";
const app = express();

const api_key  = "RGAPI-ca61ec66-4f57-4140-adf8-cd66ed3d2c13";

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/user', (req, res) => {
    const user= req.query.user;
    console.log(user);
    fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}?api_key=${api_key}`)
    .then((rcv)=>{
        return rcv.json();
    }).then((rst)=>{
        res.send(rst)
    })
})

app.listen(8080)