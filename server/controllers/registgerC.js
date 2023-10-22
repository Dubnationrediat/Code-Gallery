import connectionInfo from "../schema/database.config.js"

let registerC = (req,res)=>{
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
 
 }

 export default registerC