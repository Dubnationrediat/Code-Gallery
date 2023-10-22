import connectionInfo from "../schema/database.config.js"

let uploaderC = (req,res)=>{
    
   if(req.fileCheckerError){
    res.send("Only PNG image types can be uploaded")
   }else{
      //* console.log(req.files) // this is giving me the image files
      console.log(req)
    }
   }
    // if(req.file){
    //     console.log(req.file)
    // }

    // if(req.body){
    //     console.log(req.body)
    // }

    // const fullUrl = `${req.protocol}://${req.get("host")}/plans/${
    //     req.file.filename
    //   }`;


    // const {picture_title,picture_description} = req.body
    // let insertData = `INSERT INTO image_table(picture_title,picture_description,picture_path) VALUES (?,?,?)`
    // let value =[picture_title,picture_description,picture_path]
    // connectionInfo.query(insertData,value,(err,data,filed)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         res.send('file uploaded successfully')
    //     }
    // })
// }

export default uploaderC