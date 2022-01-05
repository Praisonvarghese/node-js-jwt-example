require('dotenv').config()
const express=require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());


const posts =[{
    username : 'Harsha',
    tittle : 'Post 1'
},
{
    username : 'Joi',
    tittle:'Post 2'
}]

const refreshTokens=[];

app.post('/login',(req,res)=>{
    const username =req.body.username;
    const user = {name:username}
    const accesstoken =generateAccessToken(user);
    const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken);
    res.json({accesstoken: accesstoken,resfreshtoken : refreshToken})
})

app.post('/refreshToken',(req,res)=>{
    const refreshToken = req.body.token;
    if(refreshToken== null) return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        const accesstoken = generateAccessToken({name : user.name});
        res.json({accesstoken:accesstoken})
    })
})

app.get('/posts',authenticateToken,(req,res)=>{
    res.json(posts.filter(post=>post.username === req.user.name));
})

app.delete("/logout",(req,res)=>{

   let refreshToken=refreshTokens.find(token=>token === req.body.token)
   if(refreshToken == null) return res.sendStatus(400)
   const index = refreshTokens.indexOf(refreshToken);
   refreshTokens.splice(index,1);

    res.sendStatus(200)
})

function generateAccessToken(user){
   return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn :'15s'})
}

function authenticateToken(req,res,next){
    const authHeadeer=req.headers['authorization']
    const token =authHeadeer && authHeadeer.split(' ')[1]
    if(token == null) return res.sendStatus(401);
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.user = user;
        next()
    }) 
}

app.listen(3000);