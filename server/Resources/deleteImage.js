import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname,relative } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let parsedDir = path.parse(__dirname).base

import connectionInfo from '../schema/database.config.js'
let deleteImage =(req,res)=>{
    let image_id = req.params.image_id
    let deleteImage = `DELETE FROM image_table WHERE image_id=${image_id}`;
    let getImageNames = `SELECT picture_path FROM image_table WHERE image_id=${image_id}`
    connectionInfo.query(getImageNames,(err,data,field)=>{
         if(err){
            console.log(err.message)
         }else{
           let imageCollectionName =  data[0]?.picture_path
           if(data[0]){
            let allNames = imageCollectionName.split(',').filter(item=> item !== '')
            for (let i = 0; i < allNames.length; i++) {
             fs.unlink(`${parsedDir}/${allNames[i]}`,(err)=>{
                 if(err){
                     console.log(err)
                 }else{      
               connectionInfo.query(deleteImage,(err,data,field)=>{
                if(err){
                    console.log(err.message)
                }else{
                   
                }
               })
                 }
                })
            }
           return res.send({
                message : 'Images Deleted successfully',
                redirect :'/gallery',
                redirectMessage:'Click here to go to gallery page'
            })


           }
        
         }
    })
}

export default deleteImage