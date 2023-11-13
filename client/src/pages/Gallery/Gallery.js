import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {axiosInstance } from '../../utility/axios'
import './Gallery.css'
import galleryImg from '../../images/gallery.jpg'

function Gallery() {
 

const [data, setdata] = useState([])


let getData = async ()=>{
    try {
       const photoData = await axiosInstance.get('/user/gallery');
       setdata(photoData.data)
    } catch (error) {
        console.log(error.message)
    }
}

useEffect(() => {
    getData()
}, [])
 
let deletePic = async (image_id)=>{
   let deleteImage = `${axiosInstance.defaults.baseURL}/user/delete/${image_id}`
  await axios({
    method:'DELETE',
    url:deleteImage
  })
  getData()
}

  return (
    <div>
        <h1>learn faster</h1>
        <a href="/upload">upload content</a>
        {
            data.map((content,i)=>{
                let gallery = (
                    <div key={i} className='singleShower'>
                    <h3>{`Title: ${content.picture_title}`}</h3>
                    <h3>{`Description: ${content.picture_description}`}</h3>
                   
                     <div className='images'>
                        <a href={`gallery/${content.image_id}`}>
                        <img className='imageIcon' src={galleryImg} alt="image section" />
                        </a>
                     </div>
                     <button onClick={()=>deletePic(content.image_id)}>Delete</button>
                     <h5>click the image icon for pictorial description</h5>
                    </div>
                )             
            return gallery
            })
        }
    </div>
  )
}


export default Gallery