import connectionInfo from "../schema/database.config.js"

let getAllData = (req,res)=>{
     let allData = `SELECT * FROM image_table`
     connectionInfo.query(allData,(err,data,filed)=>{
         if(err){
             console.log(err)
         }else{
             res.send(data)
         }
     })
 
 }

 export default getAllData