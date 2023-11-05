import fs from 'fs'

let showFrontImage=(req,res)=>{
    const {imageName}=req.params

    fs.readFile(`Resources/${imageName}`,(err,data)=>{
        if(err){
            res.status(404).send('File not found')
        }else{
              res.send(data)
        }
    })
}

export default showFrontImage;