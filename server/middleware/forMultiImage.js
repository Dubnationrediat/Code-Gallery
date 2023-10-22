import multer from 'multer'
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"./Resources")
    },

    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})

const fileChecker = function (req,file,cb){
    if(file.mimetype !== 'image/png'){
        req.fileCheckerError = "only PNG files are allowed"; 
        cb(null, false);
        // return cb(new Error("only PNG files are allowed"))
    }else{
        cb(null,true)
    }

}

// * initializing multer
const imageUploader = multer({
    storage :storage,
    fileFilter : fileChecker
})


export default imageUploader.fields([{name:'uploadedImages',maxCount:10}])