const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
//app.use(express.json());
app.use(bodyParser.json());

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

app.post("/addTodo",(req,res)=>{
    const sql = "INSERT INTO todo (`uid`,`title`,`des`) VALUES (?)"
    const values = [
        req.body.uid,
        req.body.title,
        req.body.des,
    ]
    console.log(values);
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data);
        }
    })
})

app.post("/todos/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM todo WHERE `uid` = ?";
    db.query(sql,[id],(e,d)=>{
        if(e){
            return res.json(e);
        }else{
            return res.send(JSON.stringify(d));
        }
    })
  });

  app.delete('/todos/:sno', (req, res) => {
    const sno = req.params.sno;
  
    // Your SQL query to delete the todo item with the given ID
    const sql = 'DELETE FROM todo WHERE `sno` = ?';
  
    db.query(sql, [sno], (error, result) => {
      if (error) {
        console.error('Error deleting todo:', error);
        return res.status(500).json({ error: 'Error deleting todo' });
      }
  
      // Successful deletion
      return res.json({ message: 'Todo deleted successfully' });
    });
  });


  app.post('/admindash',(req,res)=>{
    const sql = "SELECT * FROM todo";
    db.query(sql,(err,data) =>{
        if(err){
            return res.json(err);
        }else{
            return res.json(data);
        }
    })
  })
  



app.get("/",(req,res)=>{
    res.send('Hello');
})

app.listen(5000,()=>{console.log("server stared")})
