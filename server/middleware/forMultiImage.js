import multer from 'multer'
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cg(null,"/Resources")
    },

    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})

const fileChecker = function (req,file,cb){
    if(file.mimetype !== 'image/png'){
        return cb(new Error("only PNG files are allowed"))
    }else{
        cb(null,true)
    }

}

// * initializing multer
const imageUploader = multer({
    storage :storage,
    fileFilter : fileChecker
})

export default imageUploader.array('images',10)