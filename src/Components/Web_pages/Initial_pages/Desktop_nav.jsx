import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Company_name } from '../../../Js/Contants'
import {web_images} from '../../../Images/Web_pages/Web_image'
import '../../../Css/Web_pages/Desktop_nav.css'



function Desktop_nav() {
    useEffect(()=>{
        const script = document.createElement('script')
        script.src = `${process.env.PUBLIC_URL}/Js/Web_pages/Initial_page/Desktop_nav.js`
        script.async = true
        script.onload = () => console.log('Script loaded successfully')
        script.onerror = () => console.error('Error loading script:', script.src)
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }

        },[])
  return (
    <div>
      {/* <div className="sub_top_nav" id="sub_top_nav">
        <h3>Affiliated to university of Cape Coast</h3>
      </div> */}
      <nav className="desktop_nav scrolled" id="desktop_nav">
        <Link to='/' className='link'>
          <div className="logo">
              <img src={web_images.logo} alt="" />
              <h3><span>ROYAL</span> NURSING COLLEGE</h3>
          </div>
        </Link>
       
        
        <ul className='menulist' id="menuList">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/about/">ABOUT</NavLink></li>
            <li><NavLink to="4">COURSES</NavLink>
              <div className="nav_sublink_1">
                <div className='nav_sublink_ul'>
                  <li>Diploma in Registered General Nursing</li>
                  <li>Registered Midwifery</li>
                  <li>Diploma in Medical Laboratory Tech</li>
                  <li>Health Care Assistant</li>
                  <li>Health Assistant Clinicals</li>
                </div>
              </div>
            </li>

             <li><NavLink to="5">Addimision</NavLink>
              <div className="nav_sublink_1">
                <div className='nav_sublink_ul'>
                  <li>Applicants</li>
                  <li>Accomodation</li>
                  
                </div>
              </div>
            </li>
            
            <li><NavLink to="/contact-us/">CONTACT US</NavLink></li>
        </ul>
        
        <div className="button_div">
          
            <Link to=''><button className='button_trial' >Apply Now</button></Link>
        </div>
         
      </nav>

    </div>
  )
}

export default Desktop_nav