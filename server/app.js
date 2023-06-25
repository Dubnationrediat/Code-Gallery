// * step One : import dependencies 
import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
// * step two : express initialization
let app = express()

// * step three : middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

// * step four : connection info for database 
let connectionInfo = mysql.createConnection({
    host :'localhost',
    user:"group44",
    password :'group4',
    database :'group4DB'
})

// * step five : connect with database 
connectionInfo.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('connected to db')
    }
})


// *step seven : prepare routes and controllers 

// * create table :

app.get('/createTable',(req,res)=>{

    let userInfo = `CREATE TABLE if not exists userInfo(
        user_id int auto_increment,
        user_first_name text not null,
        user_last_name text not null,
        user_email varchar(255) not null,
        user_password varchar(255) not null,
        PRIMARY KEY(user_id)
    )` 
    connectionInfo.query(userInfo,(err,data,field)=>{
        if(err){
            console.log(err)
        }else{
            res.send('table created')
        }
    })

})

app.post('/regUser',(req,res)=>{
   const {user_first_name,user_last_name,user_email,user_password} = req.body
    let userData = `INSERT INTO userInfo(user_first_name,user_last_name,user_email,user_password) VALUES (?,?,?,?)`

    let value =[user_first_name,user_last_name,user_email,user_password]

    connectionInfo.query(userData,value,(err,data,filed)=>{
        if(err){
            console.log(err)
        }else{
            res.send('user registered successfully')
        }
    })

})

app.post('/upload',(req,res)=>{
    res.send('file uploaded')
})

// * wild card 
app.get('/*',(req,res)=>{
    res.send('page not found!')
})



// *step six : listener server 

app.listen(4800,()=>{
    console.log("server is listening to port 4800")
})