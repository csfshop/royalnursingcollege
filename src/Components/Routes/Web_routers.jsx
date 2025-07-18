import React,{ useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import {Nav_bar,Home,About_page,Footer,Contact_page}  from  '../../Components/Web_pages/Initial_pages/All_pages'
import '../../Css/Web_pages/Web_routes.css'
import '../../Css/Web_pages/Transition.css'

function Web_routers() {
   
   useEffect(()=>{
          
       const script = document.createElement('script')
       script.src = `${process.env.PUBLIC_URL}/Js/Web_pages/Transition.js`
       script.async = true
       script.onload = () => console.log('Script loaded successfully')
       script.onerror = () => console.error('Error loading script:', script.src)
       document.body.appendChild(script)
   
       return () => {
           document.body.removeChild(script)
       }
   
       },[])



  return (
    <div className='site-wrapper'>
     <div className="main_nav">
        <Nav_bar/>
     </div>

     <div className="site-content">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about/' element={<About_page/>}/>
             <Route path='contact-us/' element={<Contact_page/>}/>
        </Routes>
        
     </div>

     <div className="main_footer">
        <Footer/>
     </div>

    </div>


   
  )
}

export default Web_routers