import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Company_name } from '../../../Js/Contants'
import {web_images} from '../../../Images/Web_pages/Web_image'
import '../../../Css/Web_pages/Mobile_nav.css'
import {faBars,faHome,faCircleXmark,faCircleInfo,faList,faBuilding,faAddressCard,faCaretRight,faCaretDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Mobile_nav() {

    const[subnav_1,setSubnav_1] = useState(false)
    const[subnav_2,setSubnav_2] = useState(false)

    useEffect(()=>{
        const script = document.createElement('script')
        script.src = '/Js/Web_pages/Initial_page/Mobile_nav.js'
        script.async = true
        script.onload = () => {
            console.log("Script loaded successfully");
          };
          script.onerror = () => {
            console.error("Error loading script");
          };
        document.body.appendChild(script)
        return ()=>{
            document.body.removeChild(script)
        }

    },[])

  
    return (
  
    <div>
        <div className='sidebar_body' id='sidebar_blur'></div>
        <div>
            <nav className="mobile_nav" id="mobile_nav">
                <div className="logo">
                    <img src={web_images.logo} alt="" />
                    <h3><span>ROYAL</span> NURSING COLLEGE</h3>
                </div>
                
            
                <div className="icon_div">
                    <FontAwesomeIcon className='menu_icon' id='sidebar_open' icon={faBars}/>
                </div>
                
            </nav>
        </div>


        <div className="sidebar_div" >
            <nav className="sidebar " id='sidebar_div'>
                <div className="logo_items flex">
                    <span className="nav_image">
                        <img src={web_images.logo} alt="" />
                        <h3><span>ROYAL</span> NURSING COLLEGE</h3>
                    </span>
                    
                    <span>
                        <FontAwesomeIcon className='sidebar_cloes_icon' id='sidebar_close' icon={faCircleXmark}/>
                    </span>
                  
                </div>
                <div className="menu_container">
                    <div className="menu_items">
                        <div className="menu_item">
                           
                            <div className="item">
                                <NavLink to="#" className="link flex">
                                   <FontAwesomeIcon className='icon' icon={faHome}/>
                                    <span className='text'>Home</span>
                                </NavLink>
                            </div>
                            <li className="item">
                                <NavLink to="about/" className="link flex">
                                   <FontAwesomeIcon className='icon' icon={faCircleInfo}/>
                                    <span className='text'>ABOUT</span>
                                </NavLink>
                            </li>
                            <div className="item list">
                                <div onClick={()=> setSubnav_1(!subnav_1)} to="#" id='sidebar_subnav_div' className="link flex">
                                   <FontAwesomeIcon className='icon' icon={faList}/>
                                    <span className='text'>COURSES</span>
                                    <FontAwesomeIcon className='icon xtra right' icon = {subnav_1?faCaretDown:faCaretRight}/>
                                </div>
                                <div className={subnav_1?"sidebar_subnav subnav_active":"sidebar_subnav" }>
                                    <li>Registered Midwifery</li>
                                    <li>Diploma in Registered General Nursing</li>
                                    <li>Diploma in Medical Laboratory Tech</li>
                                    <li>Health Care and Assistant</li>
                                    <li>Health Assistant Clinicals</li>
                                </div>
                            </div>
                           <div className="item list">
                                <div onClick={()=> setSubnav_2(!subnav_2)} to="#" id='sidebar_subnav_div' className="link flex">
                                   <FontAwesomeIcon className='icon' icon={faBuilding}/>
                                    <span className='text'>Faculty</span>
                                    <FontAwesomeIcon className='icon xtra right' icon = {subnav_2?faCaretDown:faCaretRight}/>
                                </div>
                                <div className={subnav_2?"sidebar_subnav subnav_active":"sidebar_subnav" }>
                                   <li>Faculty Details</li>
                                    <li>Registered Midwifery</li>
                                </div>
                            </div>

                            <li className="item">
                               
                                <div to="#" className="link flex">
                                   <FontAwesomeIcon className='icon' icon={faAddressCard}/>
                                    <span className='text'>CONTACT US</span>
                                </div>
                            </li>

                            <div className="button_div">
                                {/* <button className='button_login' >Login</button> */}
                                <button className='button_trial' >Apply Now</button>
                            </div>
                          
                        </div>
                  
                    </div>
                   
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Mobile_nav