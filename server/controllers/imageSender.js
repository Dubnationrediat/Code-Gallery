import connectionInfo from "../schema/database.config.js"

let imageSender = (req,res)=>{
    const {image_id}=req.params

    let selectImage = `SELECT picture_path FROM image_table WHERE image_id = ${image_id}`
    connectionInfo.query(selectImage,(err,data)=>{
        if(err){
            console.log('error in loading images')
        }else{
            res.send(data)
        }
    })
}

export default imageSender;