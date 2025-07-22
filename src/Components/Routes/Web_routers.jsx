import React,{ useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import {Nav_bar,Home,About_page,Footer,Contact_page}  from  '../../Components/Web_pages/Initial_pages/All_pages'
import '../../Css/Web_pages/Web_routes.css'
import '../../Css/Web_pages/Transition.css'
import Not_found from '../Web_pages/Initial_pages/Not_found'

function Web_routers() {
   
  useEffect(() => {
              const Trans_SCRIPT_ID       = 'trans-script';
          
              // Guard: don’t inject twice
              if (document.getElementById(Trans_SCRIPT_ID)) return;
          
              // Function that creates & appends the script tag
              const loadScript = () => {
                const script = document.createElement('script');
                script.id = Trans_SCRIPT_ID      ;
                script.src = `${process.env.PUBLIC_URL}/Js/Web_pages/Transition.js`;
                script.async = true;
                script.onload  = () => console.log('Script trans loaded successfully');
                script.onerror = () => console.error('Error loading about script:', script.src);
                document.body.appendChild(script);
              };
          
              // If DOM is already parsed, run immediately…
              if (document.readyState === 'interactive' || document.readyState === 'complete') {
                loadScript();
          
              // …otherwise wait for the browser’s “DOMContentLoaded” event  
              } else {
                window.addEventListener('DOMContentLoaded', loadScript, false);
              }
          
              // Cleanup: remove listener & script on unmount
              return () => {
                window.removeEventListener('DOMContentLoaded', loadScript, false);
                const trans_existing = document.getElementById(Trans_SCRIPT_ID      );
                if (trans_existing) trans_existing.remove();
              };
            }, []);
    


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
              <Route path='*' element={<Not_found/>}/>
        </Routes>
        
     </div>

     <div className="main_footer">
        <Footer/>
     </div>

    </div>


   
  )
}

export default Web_routers