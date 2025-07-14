import React, { use, useReducer,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Company_name } from '../../../Js/Contants'
import {web_images} from '../../../Images/Web_pages/Web_image'
import {faCaretRight,faCaretLeft,faQuoteLeft,faMessage,faPhoneVolume,faEnvelopeCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../../Css/Web_pages/About.css'



function About_page() {

     useEffect(()=>{
        const script = document.createElement('script')
        script.src = '/Js/Web_pages/Initial_page/About.js'
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
      <div className="about_page">

        {/* about banner  */}

          <div className="about_banner">
            <div class="image-box" ></div>
            <div className="banner_content">
                <h1>About <span>Royal Nursing College</span> </h1>
                <p>
                    Empowering students with a curriculum grounded
                  in evidence-based theory and enriched by real-world practice.
                  </p>
                  <button class="btn1">Get in Touch</button>
  
              </div>
          </div>

        {/* end about banner */}



        {/* our patners */}

          <div className="aboutp_patners">
            <div className="aboutp_patners_div">
              <section>
                <div className="aboutp_heading">
                  <h1><span>Afilliation</span> and <span>Accredited</span> Institution</h1>
                  <hr />
                </div>
                <div class="slider">
                    <div class="slider-items">
                        <img src={web_images.aa_1} alt=""/>
                        <img src={web_images.aa_2} alt=""/>
                        <img src={web_images.aa_3}  alt=""/>
                        <img src={web_images.aa_4} alt=""/>
                        <img src={web_images.aa_5}  alt=""/>
                        <img src={web_images.aa_6}  alt=""/>
                        <img src={web_images.aa_7} alt=""/>
                        <img src={web_images.aa_1} alt=""/>
                        <img src={web_images.aa_2}alt=""/>
                        <img src={web_images.aa_3} alt=""/>
                        <img src={web_images.aa_4} alt=""/>
                        <img src={web_images.aa_7} alt=""/>
                        <img src={web_images.aa_5} alt=""/>
                        <img src={web_images.aa_6} alt=""/>

                    </div>
                    
                </div>

            </section>
            </div>
          </div>


        {/* our patners */}



        {/* history */}
          <div className="history_box">
            <div className="history_div">


              <div className="history_content">
                <div className="heading">
                  <h1>History of <span>Royal Nursing College</span></h1>
                  <hr />
                </div>

                <div className="easy">
                  <p>
                    The story of Royal Nursing College is one of passion, 
                    perseverance, and purpose. <span>Founded in 2001</span>, the 
                    college emerged from a bold vision: to bridge the healthcare gap 
                    by nurturing a new generation of skilled, compassionate nurses.

                  </p>

                  <p>
                    From its modest beginnings with a small cohort of students, 
                    the college has grown steadily over the years—expanding academic 
                    programs, upgrading facilities, and attracting dedicated faculty 
                    passionate about teaching and mentorship.
                  </p>

                 
                 
                </div>

              </div>


             <div className="history_images">
               <div className="images_wheels">
                  <ul class="wheel">
                  
                    <li class="img" data-title="Paris" style={{'--img':" url(/images/bg_1.jpg)"}}>
                      <div class="hoverable"></div>
                      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                      <g>
                        <text fill="currentColor" text-anchor="middle" aria-hidden="true">
                         
                          <textPath  href="#circlePath" startOffset="20">Paris</textPath>
                        </text>
                      </g>
                    </svg>
                    </li>
                    
                    <li class="img" data-title="Dubai" style={{'--img':"url(/images/bg_1.jpg)"}}>
                      <div class="hoverable"></div>
                      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                      <g>
                        <text fill="currentColor" text-anchor="middle" aria-hidden="true">
                          <textPath href="#circlePath" xlinkHref="#circlePath" startOffset="20">Dubai</textPath>
                        </text>
                      </g>
                    </svg>
                    </li>
                    
                    <li class="img" data-title="Tokyo" style={{'--img':" url(/images/bg_1.jpg)"}}>
                      <div class="hoverable"></div>
                      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                      <g>
                        <text fill="currentColor" text-anchor="middle" aria-hidden="true">
                         
                          <textPath  href="#circlePath" startOffset="20">Tokyo</textPath>
                        </text>
                      </g>
                    </svg>
                    </li>

                    <li class="img" data-title="Delhi" style={{'--img':" url(/images/bg_1.jpg)"}}>
                      <div class="hoverable"></div>
                      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                      <g>
                        <text fill="currentColor" text-anchor="middle" aria-hidden="true" >
                         
                          <textPath  href="#circlePath" startOffset="20">Delhi</textPath>
                        </text>
                      </g>
                    </svg>
                    </li>
                  
                    <li class="img" data-title="Sydney" style={{'--img':" url(/images/bg_1.jpg)"}}>
                      <div class="hoverable"></div>
                      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                      <g>
                        <text fill="currentColor" text-anchor="middle" aria-hidden="true" >
                         
                          <textPath href="#circlePath" xlinkHref="#circlePath" startOffset="20">Dubai</textPath>

                        </text>
                      </g>
                    </svg>
                    </li>

                    
                    <li class="img" data-title="London" style={{'--img':" url(/images/bg_1.jpg)"}}>
                      <div class="hoverable"></div>
                      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                      <g>
                        <text fill="currentColor"  text-anchor="middle" aria-hidden="true">
                         
                          <textPath  href="#circlePath" startOffset="20">London</textPath>
                        </text>
                      </g>
                    </svg>
                    </li>
                  
                    <li class="img" data-title="Rome" style={{'--img':" url(/images/bg_1.jpg)"}}>
                      <div class="hoverable"></div>
                      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                      <g>
                        <text fill="currentColor"  text-anchor="middle" aria-hidden="true">
                         
                          <textPath  href="#circlePath" startOffset="20">Rome</textPath>
                        </text>
                      </g>
                    </svg>
                    </li>
                    
                    <li class="img" data-title="New York" style={{'--img':" url(/images/bg_1.jpg)"}}>
                      <div class="hoverable"></div>
                      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                      <g>
                        <text fill="currentColor" text-anchor="middle" aria-hidden="true">
                         
                          <textPath  href="#circlePath" startOffset="20">New York</textPath>
                        </text>
                      </g>
                    </svg>
                    </li>

                  </ul>
               </div>

              </div> 
            </div>
          </div>
        {/* end history */}

        {/* mission and vision */}

          <div className="mvn_div">
            <div className="mvn_sub">
              
                <div className="container">
                    <div className="motto">
                      <h1>Motto:</h1>
                      <div className="motto_qoute">
                        <FontAwesomeIcon className='icon' icon={faQuoteLeft}/>
                        <p>
                            Developing the Next Generation of Innovators.
                        </p>
                      
                      </div>

                    </div>
                    <div className="row">
                      <div className="card">
                          <div className="info">
                          <div className="sub">Mission Statement</div>
                          <div className="title">
                          Royal Nursing College shares its mission with other nursing training colleges'
                              world wide a commitment to the provision of quality health care service to all persoons.
                              It aspires to be a community characterized by free inquiry,dicipline,God fearing and academic integrity.
                              This will be achieved through the provision of academically rigorious,culturally and contextually
                              relevant academic programs which will train students for moral uprightness,professional excellence,and responsible global citizenship.
                          </div>
                          <button className="btn">Reach Out</button>
                          </div>
                          
                      </div>
                      <div className="card">
                          <div className="info">
                          <div className="sub">Vision Statement</div>
                          <div className="title">
                              Royal Nursing College aspires to be a private health professional training colleges
                              which will be recognized for innovation and quality in teaching and learning. The
                              college has plans to provide nurses to take care of the healtcare needs of all categories
                              of people. The college's ideal graduates will be highly competent in their chosen
                              fields,ethical in their behavior, with a developed critical habit of mind,an  appreciation 
                              of the sacred in life,and zeal habit to serving the common good of all.
                          </div>
                          <button className="btn">Get in Touch</button>
                          </div>
                          
                      </div>
                    </div>
                
                </div>
            </div>
          </div>
        {/* end mission and vision */}


        {/* about_summary */}

        <div className="about_summary">
          <div className="about_summary_div">

            <div className="about_summary_title">
              <h1> Our Core <span>Values</span> </h1>
              <hr />
            </div>

           <div className="about_summary_item">
              <div className="title">
                <h1>Empathy</h1>
                <hr />
              </div>
             <div className="abt_summary_content">
                <h2><span>Empathy</span> at Our College</h2>
                <p>
                  Empathy is the heartbeat of nursing—more than hearing words, 
                  it’s stepping into someone’s world, sensing their fears and hopes, 
                  and responding with genuine compassion. 
                  At our college, you’ll cultivate empathy through:
                </p>
                <ul>
                    <li class="one">
                      Immersive simulations that challenge you to balance clinical
                       skills with emotional insight
                      </li>

                      <li class="one">
                      Reflective journaling and debriefs that deepen self-awareness and 
                      cultural sensitivity
                      </li>
                       <li class="one">
                        Community outreach experiences where you learn to honor each person’s story
                      </li>
                </ul>
            </div>

              <div className="abt_summary_image">
                   <img class="card-img" src={web_images.gg_7} alt="Team Member 1"/>
              </div>
           </div>

             <div className="about_summary_item">
              <div className="title">
                <h1>Professionalism</h1>
                <hr />
              </div>
             <div className="abt_summary_content">
                <h2><span>Professionalism</span> at Our College</h2>
                <p>
                  Professionalism is the foundation of trust in nursing—it’s how skill,
                   integrity, and accountability come to life at every bedside.
                   At our college, students are trained not only in clinical excellence
                    but in the behaviors and attitudes that define trusted healthcare 
                    providers.We cultivate professionalism through:
                </p>
                <ul>
                    <li class="one">
                        <span>Ethical Practice: </span>
                        Upholding respect, confidentiality, and honesty in all.

                      </li>

                      
                       <li class="one">
                        <span>Collaboration: </span>
                       Communicating clearly and working respectfully with peers, patients, and professionals.
                      </li>


                       <li class="one">
                        <span>Discipline & Accountability: </span>
                        Showing up prepared, meeting responsibilities, and taking initiative.

                      </li>
                      
                       
                </ul>
            </div>

              <div className="abt_summary_image">
                   <img class="card-img" src={web_images.gg_12} alt="Team Member 1"/>
              </div>
           </div>



           <div className="about_summary_item">
              <div className="title">
                <h1>Teamwork</h1>
                <hr />
              </div>
             <div className="abt_summary_content">
                <h2><span>Teamwork</span> at Our College</h2>
                <p>
                  Teamwork is essential to safe, effective, and compassionate 
                  nursing care. It’s about communicating clearly, trusting others,
                   and uniting around a shared purpose: supporting patient well-being.
                   We nurture teamwork by:
                </p>


                 <ul>
                    <li class="one">
                        <span>Respectful Communication: </span>
                        Emphasis on active listening, giving and receiving feedback, 
                        and resolving conflict with empathy.

                      </li>

                      
                       <li class="one">
                        <span>Interdisciplinary Exposure: </span>
                       Simulated scenarios involve nurses, doctors, and 
                       other professionals to mirror real healthcare teams.
                      </li>


                       <li class="one">
                        <span>Collaborative Learning: </span>
                        Students work in groups to solve clinical challenges, share knowledge, and build trust.

                      </li>
                      
                       
                </ul>
               
            </div>

              <div className="abt_summary_image">
                   <img class="card-img" src={web_images.gg_8} alt="Team Member 1"/>
              </div>
           </div>


            

           

          </div>
        </div>

        {/* end about summary */}


        {/* our team */}

          <div className="about_our_team">
            <div className="teams_slides">
             <div className="teams_title">
              <h1>Our Awesome <span>Crew</span></h1>
              <hr />
             </div>

              <div class="carousel-container">
                <button class="nav-arrow left"><FontAwesomeIcon className='icon' icon={faCaretLeft}/></button>
                <div class="carousel-track">
                  <div class="card" data-index="0">
                    <img class="card-img" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 1"/>
                    <div class="card-content">
                      <h3 class="card-name">Emily Kim</h3>
                      <p class="card-role">Founder</p>
                      
                    </div>
                  </div>
                  <div class="card" data-index="1">
                    <img class="card-img" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 2"/>
                      <div class="card-content">
                        <h3 class="card-name">Michael Steward</h3>
                        <p class="card-role">Creative Director</p>
                       
                      </div>
                  </div>
                  <div class="card" data-index="2">
                    <img class="card-img" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="Team Member 3"/>
                    <div class="card-content">
                      <h3 class="card-name">Emma Rodriguez</h3>
                      <p class="card-role">Lead Developer</p>
                      
                    </div>
                  </div>
                  <div class="card" data-index="3">
                    <img class="card-img" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="Team Member 4"/>
                    <div class="card-content">
                      <h3 class="card-name">Julia Gimmel</h3>
                      <p class="card-role">UX Designer</p>
                      
                    </div>
                  </div>
                  <div class="card" data-index="4">
                    <img class="card-img" src="https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Team Member 5"/>
                    <div class="card-content">
                      <h3 class="card-name">Lisa Anderson</h3>
                      <p class="card-role">Marketing Manager</p>
                     
                    </div>
                  </div>
                  <div class="card" data-index="5">
                    <img class="card-img" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 6"/>
                    <div class="card-content">
                      <h3 class="card-name">James Wilson</h3>
                      <p class="card-role">Product Manager</p>
                      
                    </div>
                  </div>
                </div>
                <button class="nav-arrow right"><FontAwesomeIcon className='icon' icon={faCaretRight}/></button>
              </div>

              <div class="member-info">
                <div class="member-info-content">
                  <h2 class="member-name" aria-live="polite">Emily Kim</h2>
                  <p class="member-role" aria-live="polite">Founder</p>
                  
                </div>
              </div>

              

              
            </div>
          </div>

        {/* our team */}



        {/* president profile */}

          <div className="pre_profile">
            <div className="pre_profile_div">
              <div class="main-grid">
                <div class="image-container">
                  <img src="https://ik.imagekit.io/gopichakradhar/assets/gopi.png?updatedAt=1749707575187" alt="Avatar" class="character-img"/>
                  <div class="overlay-panel">
                    <h3>Creative Mind · Scalable Ideas</h3>
                    <div class="types">
                      <p>President</p>
                      
                      
                    </div>
                  </div>
                </div>
                <div class="right-grid">
                  <div class="orange-box">
                    <div className="pre_contact">
                       <h4><FontAwesomeIcon className='icon' icon={faPhoneVolume}/> <span>Call:</span></h4>
                      <p>024-285-8996/055-421-9121</p>
                    </div>

                    <div className="pre_contact">
                       <h4><FontAwesomeIcon className='icon' icon={faMessage}/> <span>Whatsapp:</span></h4>
                      <p>024-285-8996/055-421-9121</p>
                    </div>

                    <div className="pre_contact">
                       <h4><FontAwesomeIcon className='icon' icon={faEnvelopeCircleCheck}/> <span>Email:</span></h4>
                      <p>royalnursingcollege77@gmail.com</p>
                    </div>
                  </div>
                
                  <div class="bottom-right">
                    <div class="vertical-line"></div>
                    <div class="text-content">
                      <h1><span class="white">Gopi</span> <span class="orange">Chakradhar </span></h1>
                      <p>hkhjkhhkl hlhkhl gjvgj</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        {/* president profile */}

      </div>
  )
}

export default About_page