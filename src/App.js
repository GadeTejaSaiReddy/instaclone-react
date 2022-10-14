
import './App.css';
import LandingPage from './landingpage/landing';
import PostView from './postview/postview';
import FormData from './form data/form';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<LandingPage/>}/>
      <Route path ="/postView" element ={<PostView/>}/>
      <Route path='/formData'  element={<FormData/>}/>
    </Routes>
    </BrowserRouter>
    </>
  
    )
   
}

export default App;
