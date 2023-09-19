const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'signup'
})

app.post('/signup',(req,res)=>{
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password,
    ]
    db.query(sql,[values],(err,data)=>{
        
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
    
})


app.post('/login',(req,res)=>{
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
   
        const result  = db.query(sql,[ req.body.email,req.body.password],(err,data)=>{
            if(err){
                return res.json("Error");
            }
            if(data.length > 0){
                return res.send(JSON.stringify(data));
            }else{
                return res.json("fail");
            }
        })

})

app.get("/",(req,res)=>{
    res.send('Hello');
})

app.listen(5000,()=>{console.log("server stared")})
