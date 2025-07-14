import React from 'react'
import '../../../Css/Web_pages/Contact.css'
import { web_images } from '../../../Images/Web_pages/Web_image'
import { Company_name } from '../../../Js/Contants'
import {faLocationDot,faPhoneVolume,faEnvelope,faBusinessTime} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Contact_page() {
  return (
    <div className="contact_page_div">


        {/* contact page banner */}
          <div className="contact_banner">
            <div class="image-box" ></div>
            <div className="banner_content">
                <h1>Contact <span>Royal Nursing College</span>  </h1>
                <p>
                    Have questions or need more information? 
                    We’re here to help! Reach out to us for inquiries about admissions, 
                    programs, or general support.
                  </p>
                  <button class="btn1">Apply Now</button>
                  
  
            </div>
          </div>

        {/* end contact page banner */}




        <div className="contact_content">
            {/* map */}
                <div className="contact_map">
                    <div className="contact_map_div">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3910101828596!2d-1.6142603898153478!3d6.722050693245865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb97a4f6f65da5%3A0xdbe87f913c828317!2sRoyal%20Nursing%20College!5e0!3m2!1sen!2sgh!4v1751938764861!5m2!1sen!2sgh"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            {/* endmap */}



            {/* info */}

                <div className="contact_info">
                    <div className="contact_info_div">
                        <div className="contact_title">
                            <h4>CONTACT INFO. :</h4>
                            <h1>Get In Touch</h1>
                            <hr />
                            <p>Looking to join May Nursing College or have 
                                questions about our programs? We’re here to help you.</p>
                        </div>


                        <div className="contact_item">
                            <div className="iconm">
                                <FontAwesomeIcon className='icon' icon={faLocationDot}/>
                            </div>
                            <div className="content">
                                <h2>
                                    Our Address
                                </h2>
                                <p>
                                    Tafo Nhyiaeso, Kumasi near Tafo Government Hospital
                                </p>
                            </div>
                        </div>

                        
                        <div className="contact_item">
                            <div className="iconm">
                                <FontAwesomeIcon className='icon' icon={faPhoneVolume}/>
                            </div>
                            <div className="content">
                                <h2>
                                    Phone Number
                                </h2>
                                <p>
                                  Phone: 024-285-8996
                                </p>
                                <p>
                                  Phone: 055-421-9121
                                </p>
                                <p>
                                  Phone: 054-634-4440
                                </p>
                            </div>
                        </div>



                        
                        <div className="contact_item">
                            <div className="iconm">
                                <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                            </div>
                            <div className="content">
                                <h2>
                                    Email Address
                                </h2>
                                <p>
                                    royalnursingcollege77@gmail.com
                                </p>
                            </div>
                        </div>



                        
                        <div className="contact_item">
                            <div className="iconm">
                                <FontAwesomeIcon className='icon' icon={faBusinessTime}/>
                            </div>
                            <div className="content">
                                <h2>
                                    Hours of Operation
                                </h2>
                                <p>
                                    Monday - Friday: 08:00 - 17:00 GMT
                                </p>
                            </div>
                        </div>



                        
                       
                    </div>
                </div>

            {/* info */}
                </div>
    </div>
  )
}

export default Contact_page