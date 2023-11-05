import React from 'react'
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import Gallery from './pages/Gallery/Gallery'
import Upload from './pages/fileUpload/Upload'
import Error from './pages/404/Error'
import PicDisp from './pages/PictureDisplay/PicDisp';
function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<Gallery/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/upload' element={<Upload/>}/>
    <Route path='/gallery/:image_id' element={<PicDisp/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
    </>
  
  )
}

export default App