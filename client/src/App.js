import React ,{useState} from 'react'
import './App.css';
import { axiosInstance } from './utility/axios.js';
import axios from 'axios'
function App() {
  const [inputs, setinputs] = useState({
    imageName:"",
    imageDescription:"",
  })
  const [images, setimages] = useState(null)
 const [error, seterror] = useState('')


  let handleChange = (e)=>{
    seterror('')
    const fileData = new FormData()
    if(e.target.files){
      let files = Object.values(e.target.files)
      if(files.length>10){
        seterror('only 10 images are allowed')
      }
      files?.forEach((item)=>{
           fileData.append("uploadedImages",item)
      })
    }
    switch(e.target.name){
      case "image_name" : 
      fileData.append("image_name",e.target.value)
      break
      case"image_description":
      fileData.append("image_description",e.target.value)
    }
    setimages(fileData)
  }


let submitter = (e)=>{
  e.preventDefault()
  let linkToSend = `${axiosInstance.defaults.baseURL}/user/upload`
   axios({
     method :"POST",
     url:linkToSend,
     data:images,
     headers: {"Content-Type": "multipart/form-data"}
   })
 }
 



  return (
    <div className="App">
      {
        error && <h1>{error}</h1>
      }
      <form onSubmit={submitter}>
        <label htmlFor="imageName">image name</label>
        <input type="text" name='image_name' id='imageName' onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="imageD">image description</label>
        <input type="text" name='image_description' id='imageD'  maxLength='100' onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor='fileUpload' className='label'>
          select image
        </label>
      <input 
      id="fileUpload"
      required
      onChange={handleChange}
      name="uploadedImages"
      type="file"
      accept="image/*"
      multiple
     />
     <br />
     <br />
     <br />
     <button type='submit' disabled={error?true:false}> submit</button>
      </form>
 
  </div>
  );
}

export default App;
