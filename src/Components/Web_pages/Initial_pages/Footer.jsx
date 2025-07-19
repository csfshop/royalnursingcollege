import React from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import { Company_name } from '../../../Js/Contants'
import {web_images} from '../../../Images/Web_pages/Web_image'
import {FaFacebookF,FaYoutube,FaInstagram,FaTiktok} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../Css/Web_pages/Footer.css'

function footer() {
  return (
   <div className="footer_div">
 
     <footer>
      <div class="content">
        <div class="link-boxes">
        
           <ul class="box">
            <li>
              <Link to='/' className='link'>
                <div className="logo">
                    <img src={web_images.logo} alt="" />
                    <h3><span>ROYAL</span> NURSING COLLEGE</h3>
                </div>
              </Link>
            </li>
            <li className="sub_li">
             <h3>Affiliated to university of Cape Coast</h3>
            </li>
            <li>
              <h1>FOLLOW US ON:</h1>
              <div className="sm">
                <Link to='/'  class="link fb"><span className='menu_icon'><FaFacebookF /></span></Link>
                <Link to='/' class="link yt"><span className='menu_icon'><FaYoutube /></span></Link>
                <Link to='/' class="link ig"><span className='menu_icon'><FaInstagram /></span></Link>
                <Link to='/' class="link git"><span className='menu_icon'><FaTiktok /></span></Link>
              </div>
            </li>
         
          </ul>

          <ul class="box">
            <li class="link_name">LINKS</li>
            <Link to='/'><li className="links">Home</li></Link>
             <Link to='/about/'><li className="links">About</li></Link>
              <Link ><li className="links">Applicants</li></Link>
                <Link ><li className="links">Accomodation</li></Link>
               <Link to='/contact-us/'><li className="links">Contact Us</li></Link>
          </ul>
        
         
          <ul class="box">
            <li class="link_name">Courses</li>
            <Link><li className="links">Diploma in Registered General Nursing</li></Link>
           <Link><li className="links">Registered Midwifery</li></Link>
           <Link><li className="links">Diploma in Medical Laboratory Tech</li></Link>
           <Link><li className="links">Health Care Assistant</li></Link>
           <Link><li className="links">Health Assistant Clinicals</li></Link>
          </ul>  

          <ul className="box">
             <li className="sub_contact">
              <h3>Email:</h3>
              <p>Educate.support@info.com</p>
            </li>
            <li className="sub_contact">
              <h3>Call directly:</h3>
              <p>024-285-8996 / 054-634-4440</p>
            </li>
            <li className="sub_contact">
              <h3>Address:</h3>
              <p>Tafo Nhyiaeso-Kumasi near Tafo Government Hospital</p>
            </li>
          </ul>
           
        </div>
      </div>
      <div class="bottom-details">
        <div class="bottom_text">
          <span class="copyright_text">Copyright © 2025 Royal Nursing College All rights reserved</span>
          
        </div>
      </div>
  </footer>
  </div>
 
  )
}

export default footer