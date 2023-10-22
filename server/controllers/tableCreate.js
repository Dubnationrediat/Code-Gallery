import connectionInfo from "../schema/database.config.js"
import { imageTable,userInfo } from "../schema/tables.js"

let tableCreation = (req,res)=>{
    connectionInfo.query(imageTable,(err,data,field)=>{
     if(err){
         console.log(err)
     }else{
      
         connectionInfo.query(userInfo,(err,data,field)=>{
             if(err){
                 console.log(err)
             }else{
             return    res.send('table created')
             }
         })

     }
 })

}

export default tableCreation