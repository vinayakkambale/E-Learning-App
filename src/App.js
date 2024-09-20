
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from "../src/components/AboutPage"
import CoursesPage from "../src/CoursesPage"
import Contact from "../src/components/Contact/Contact"
import Home from "../src/pages/Home"
import ServicesPage from "../src/components/Service-section/ServicesPage"





function App() {
  return (
    <>
  <BrowserRouter>
  {/* <Header/> */}
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/courses' element={<CoursesPage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<ServicesPage/>} />
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
    
        {/* <Home />  */}
      </>
  )
  
}

export default App;
