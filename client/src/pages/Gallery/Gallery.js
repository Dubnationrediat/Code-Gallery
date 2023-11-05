import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AxiosInstance, axiosInstance } from '../../utility/axios'
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
 

  return (
    <div>
        <h1>learn faster</h1>
        <a href="/upload">upload content</a>
        {
            data.map((content,i)=>{
                let splitter = content.picture_path.split(',');
                let gallery = (
                    <div key={i} className='singleShower'>
                    <h3>{`Title: ${content.picture_title}`}</h3>
                    <h3>{`Description: ${content.picture_description}`}</h3>
                   
                     <div className='images'>
                        <a href={`gallery/${content.image_id}`}>
                        <img className='imageIcon' src={galleryImg} alt="image section" />
                        </a>
                     </div>
                     <h5>click on the image icon for pictures</h5>
                    </div>
                )             
            return gallery
            })
        }
    </div>
  )
}


export default Gallery