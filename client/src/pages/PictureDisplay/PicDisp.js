

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { axiosInstance } from '../../utility/axios'
import './PicDisp.css'
function PicDisp() {
    const [Response, setResponse] = useState()
    let {image_id} = useParams()
    let url = `${axiosInstance.defaults.baseURL}/user/gallery/${image_id}`
    
useEffect(() => {
  axios({
    method :'GET',
    url,
    }).then((res) => {
      let filtered = res.data[0].picture_path.split(',')
      
      let commaRemover = filtered.filter(item=> item !== '')
      
     setResponse(commaRemover)

   

})
}, [])





  return (

    <div>
      <a href="/upload">upload content</a>
      <br />
      <a href="/gallery">Gallery</a>
       {
         Response?.map((singleImage,i)=>{
            let images = (
                 <div className='col-sm-12 col-md-4 imageSize' key={i}>
                       <img src={`${axiosInstance.defaults.baseURL}/user/Resource/${singleImage}`} alt="" />
                 </div>
            )

return images
         })
       }
      
    </div>
  )
}

export default PicDisp