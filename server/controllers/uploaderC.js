import connectionInfo from "../schema/database.config.js"
// import formidable from 'formidable'


let uploaderC = (req,res)=>{
    
   if(req.fileCheckerError){
    res.json({
      message : "Only PNG image types can be uploaded",
      redirect :'/upload',
      redirectMessage:'click here to try again'
    })
   }else{
      if(req.files.uploadedImages===undefined){
           res.json({
            message : 'Image Upload is mandatory',
            redirect :'/upload',
            redirectMessage:'click here to go to home page'
         })
      }else{
         const {image_name,image_description}=req.body
          let imageNames='' 
         for (let i = 0; i < req.files.uploadedImages.length; i++) {

                   imageNames = `${imageNames}${req.files.uploadedImages[i].filename},`
            
         }
  
         let insertData = `INSERT INTO image_table(picture_title,picture_description,picture_path) VALUES (?,?,?)`
         let value =[image_name,image_description,imageNames]
             connectionInfo.query(insertData,value,(err,data,filed)=>{
        if(err){
            console.log(err)
        }else{
            res.json({
               message : 'file uploaded successfully',
               redirect :'/gallery',
               redirectMessage:'click here to go to gallery page'
            })
        }
    })
      }
    }
   }


export default uploaderC