import React, { useEffect, useState } from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
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
        script.src = `${process.env.PUBLIC_URL}/Js/Web_pages/Initial_page/Mobile_nav.js`
        script.async = true
        script.onload = () => console.log('Script loaded successfully')
        script.onerror = () => console.error('Error loading script:', script.src)
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }

    },[])

    const navigate = useNavigate()

    const mobile_link_click = (path_way)=>(e)=>{
        e.preventDefault()
        const target_bar = document.getElementById("sidebar_div")
        const target_over = document.getElementById("sidebar_blur")

        target_bar.classList.remove('sidebar_active')
        target_over.style.display = 'none'

        navigate(path_way)
        
        
    }

  
    return (
  
    <div>
        <div className='sidebar_body' id='sidebar_blur'></div>
        <div>
            <nav className="mobile_nav" id="mobile_nav">
              <Link  to='/'>
                <div className="logo">
                 
                    <img src={web_images.logo} alt="" />
                    <h3><span>ROYAL</span> NURSING COLLEGE</h3>
            
                </div>
              </Link>
                
            
                <div className="icon_div">
                    <FontAwesomeIcon className='menu_icon' id='sidebar_open' icon={faBars}/>
                </div>
                
            </nav>
        </div>


        <div className="sidebar_div" >
            <nav className="sidebar " id='sidebar_div'>
                <div className="logo_items flex">
                   <Link onClick={mobile_link_click('/')} >
                     <span className="nav_image mobile_nav_link">
                        <img src={web_images.logo} alt="" />
                        <h3><span>ROYAL</span> NURSING COLLEGE</h3>
                    </span>
                   </Link>
                    
                    <span>
                        <FontAwesomeIcon className='sidebar_cloes_icon' id='sidebar_close' icon={faCircleXmark}/>
                    </span>
                  
                </div>
                <div className="menu_container">
                    <div className="menu_items">
                        <div className="menu_item">
                           
                            <div className="item">
                                <NavLink onClick={mobile_link_click('/')}  className="link flex">
                                   <FontAwesomeIcon className='icon' icon={faHome}/>
                                    <span className='text'>Home</span>
                                </NavLink>
                            </div>
                            <li className="item">
                                <NavLink onClick={mobile_link_click('/about/')}  className="link flex">
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
                                    <li onClick={mobile_link_click('/')}>Registered Midwifery</li>
                                    <li onClick={mobile_link_click('/')}>Diploma in Registered General Nursing</li>
                                    <li onClick={mobile_link_click('/')}>Diploma in Medical Laboratory Tech</li>
                                    <li onClick={mobile_link_click('/')}>Health Care and Assistant</li>
                                    <li onClick={mobile_link_click('/')}>Health Assistant Clinicals</li>
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

                            <li onClick={mobile_link_click('/contact_us/')} className="item">
                               
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