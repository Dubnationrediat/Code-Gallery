import React ,{useState} from 'react'
import './Upload.css';
import { axiosInstance } from '../../utility/axios';
import axios from 'axios'


function Upload() {
  const [inputs, setinputs] = useState({
    imageName: "",
    imageDescription: "",
  });
  const [images, setimages] = useState();
  const [error, seterror] = useState("");
  const [Response, setResponse] = useState('')

  let handleChange = (e) => {
    seterror("");
    const fileData = new FormData();
    if (e.target.name === "image_name") {
      setinputs((prevInputs) => ({
        ...prevInputs,
        imageName: e.target.value,
      }));
    } else if (e.target.name === "image_description") {
      setinputs((prevInputs) => ({
        ...prevInputs,
        imageDescription: e.target.value,
      }));
    }
    if (e.target.files) {

      let files = Object.values(e.target.files);

      if (files.length > 10) {
        seterror("only 10 images are allowed");
      } else {
        files.forEach((item) => {
          fileData.append("uploadedImages", item);
        });
      }
    }
    setimages(fileData);
  };

  let submitter = (e) => {
    e.preventDefault();
    if (!inputs.imageName || !inputs.imageDescription) {
      seterror("All fields are required");
    } else {
      let linkToSend = `${axiosInstance.defaults.baseURL}/user/upload`;
      images.append("image_name", inputs.imageName);
      images.append("image_description", inputs.imageDescription);

      axios({
        method: "POST",
        url: linkToSend,
        data: images,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response)=>{
         setResponse(response.data)
      })
    }
  };

   if(Response){
    return(
      <div className="pageNotFound my-5">
              <h1 className="thankYou">{Response.message}</h1>
              <a className="thankYouAnch" href={`${Response.redirect}`}>
                {Response.redirectMessage}
              </a>
            </div> 
        )
   }else{
    return (
      <div className="App">
        {error && <h1>{error}</h1>}
        <form onSubmit={submitter}>
           <label htmlFor="imageName">Image name</label>         
           <input type="text" name='image_name' id='imageName' onChange={handleChange} />
           <br />
           <br />
           <label htmlFor="imageD">Image description</label>
           <input type="text" name='image_description' id='imageD'  maxLength='100' onChange={handleChange}/>
           <br />
           <br />
           <label htmlFor='fileUpload' className='label'>
             select image
           </label>
         <input 
         id="fileUpload"
         onChange={handleChange}
         name="uploadedImages"
         type="file"
         accept="image/png"
         multiple
        />
        <br />
        <br />
        <br />
        <button type='submit' disabled={error?true:false}> submit</button>
         </form>
         <a href="/gallery">Go to Gallery</a>
      </div>
    );
   }

 
}

export default Upload;

