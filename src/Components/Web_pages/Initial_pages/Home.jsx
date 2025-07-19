import React, { useEffect, useState } from 'react'
import '../../../Css/Web_pages/Home.css'
import { web_images } from '../../../Images/Web_pages/Web_image'
import { Company_name } from '../../../Js/Contants'
import {faCaretRight,faCaretLeft,faEye,faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useNavigate } from 'react-router-dom';


function Home() {
    
  useEffect(()=>{
       
    const script = document.createElement('script')
    script.src = `${process.env.PUBLIC_URL}/Js/Web_pages/Initial_page/Home.js`
    script.async = true
    script.onload = () => console.log('Script loaded successfully')
    script.onerror = () => console.error('Error loading script:', script.src)
    document.body.appendChild(script)

    return () => {
        document.body.removeChild(script)
    }

    },[])

    const navigate = useNavigate()


    const  navigate_path_btn = (path_way) =>{
        navigate(path_way)
    }

  return (
  <div className='main_home'>

    {/* main slider div */}
    <div className="main_slider_div">
     
      <main className="main_slider_sub">
        <section className="carousel next" id="carousel_div">
            <div className="list">
           
                <article className="item other_1">
                    <div className="main-content" style={{backgroundColor:'white'}}>
                        <div className="mobile_imgdiv">
                             <img src={web_images.ms_1} alt=""/>
                        </div>
                        
                        <div className="content">
                            
                            <h2>Affiliated to university of Cape Coast</h2>
                    
                            <p className="description">
                                Welcome to <span>ROYAL NURSING COLLEGE</span>—a place where passion for 
                                care meets excellence in education. Our institution offers 
                                a dynamic curriculum that seamlessly integrates advanced 
                                classroom theory with hands-on clinical training.
                              
                            </p>
                            
                            <div  className="button_div">
                                <button onClick = {()=> navigate_path_btn('/contact-us/')} className='button_trial' >Apply Now</button>
                            </div>
                        </div>

                         
                    </div>


                    <figure className="image">
                        
                        <img src={web_images.ms_1} alt=""/>
                          
                    </figure>
                </article>
               
                <article className="item active">
                    <div className="main-content" 
                   style={{background:"whitesmoke"}} >

                         <div className="mobile_imgdiv">
                             <img src={web_images.ms_2} alt=""/>
                        </div>
                        <div className="content">
                             <h2>Our State-of-the-Art Facilities</h2>
                    
                            <p className="description">
                                
                                Our campus features realistic simulation labs with high-fidelity manikins, 
                                 advanced anatomy and skills suites, and a digital learning commons. 
                                 Complemented by a wellness lounge and 24/7 resource center, 
                                 these spaces immerse you in a professional environment that readies 
                                 you for modern healthcare.
                                  
                            </p>
                            
                            <div className="button_div">
                                <button onClick = {()=> navigate_path_btn('/contact-us/')}  className='button_trial' >Apply Now</button>
                                
                            </div>
                        </div>
                    </div>
                    
                    

                    <figure className="image">
                        <img src={web_images.ms_2} alt=""/>
                       
                    </figure>
                </article>

                <article className="item other_2">
                    <div className="main-content" 
                    style={{backgroundColor:"lightgrey"}}>
                         <div className="mobile_imgdiv">
                             <img src={web_images.ms_3} alt=""/>
                        </div>
                        <div className="content">
                          <h2>Bridging Theory and Practicals</h2>
                    
                             <p className="description">
                                Our student practicals are the heart of our hands-on 
                                training program, bridging classroom theory with 
                                real-world patient care. In our well-equipped 
                                simulation labs and clinical placements, students 
                                engage in activities that build essential skills—from 
                                patient assessments to emergency procedures. 
                                
                                  
                            </p>
                            
                            <div className="button_div">
                                <button onClick = {()=> navigate_path_btn('/contact-us/')}  className='button_trial' >Apply Now</button>
                               
                            </div>
                        </div>
                    </div>

                    

                    <figure className="image">
                        <img src={web_images.ms_3} alt=""/>
                    </figure>
                </article>

                <article className="item">


                    <div className="main-content" 
                    style={{backgroundColor:"#7eb63d"}}>

                        
                        <div className="mobile_imgdiv">
                            <img src={web_images.ms_4} alt=""/>
                        </div>

                        <div className="content">
                            <h2>Our Expert Educators</h2>
                    
                             <p className="description">
                              Our faculty combines accomplished clinicians and 
                              pioneering researchers, each bringing real-world expertise 
                              to the classroom and lab. With personalized mentorship and 
                              evidence-based instruction, they sharpen your clinical judgment 
                              and professional confidence from day one.
                                  
                            </p>
                            
                            <div className="button_div">
                                <button onClick = {()=> navigate_path_btn('/contact-us/')}  className='button_trial' >Apply Now</button>
                                
                            </div>
                        </div>
                    </div>

                 
                    <figure className="image">
                        <img src={web_images.ms_4} alt=""/>
                    </figure>
                </article>
              
              
            </div>
            <div className="arrows">
                <button id="prev"><FontAwesomeIcon className='icon' icon = {faCaretLeft}/></button>
                <button id="next"><FontAwesomeIcon className='icon' icon = {faCaretRight}/></button>
            </div>
        </section>
    </main>
    </div>
    {/* end of main slider div */}



     {/* our patners */}

          <div className="homep_patners">
            <div className="homep_patners_div">
               <section>
                    <div className="homep_heading">
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



    {/* home summary */}

    <div className="summary">
        <div className="subdiv">
            <div className="sry_content">
           

            <h1 className="linear-wipe ">
                Greetings From ROYAL NURSING COLLEGE
            </h1>

            <div className="detail">
                    <p className="zoom_hidden"> 
                        Established in 2005 by a dedicated group of 
                        visionary healthcare professionals and community leaders, 
                        Royal Nursing College has been a cornerstone of excellence in 
                        nursing education since its inception.
                        Originally founded to address the growing need for 
                        skilled and compassionate nursing care. 
                    </p>


                      <p className="zoom_hidden">
                        We are dedicated to nurturing excellence in healthcare through a 
                        blend of rigorous academic programs and hands-on clinical experience.
                        Our mission is to empower aspiring nurses with the knowledge, skills,
                        and empathy required to excel in a dynamic medical landscape. 
                       
                    </p>


                
            </div>

            </div>
            <div className="sry_conts">
                
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                        <div className="card bounce_hidden">
                            <div className="info">
                            <div className="sub">Mission Statement</div>
                            <div className="title">
                               <p>
                                 Royal Nursing College shares its mission with other nursing training colleges'
                                world wide a commitment to the provision of quality health care service to all persoons.
                                It aspires to be a community characterized by free inquiry,dicipline,God fearing and academic integrity.
                                This will be achieved through the provision of academically rigorious,culturally and contextually
                                relevant academic programs which will train students for moral uprightness,professional excellence,and responsible global citizenship.
                               </p>
                            </div>
                            <button onClick = {()=> navigate_path_btn('/contact-us/')}  className="btn">Reach Out</button>
                            </div>
                            
                        </div>
                        <div className="card bounce_hidden">
                            <div className="info">
                            <div className="sub">Vision Statement</div>
                            <div className="title">
                               <p>
                                 Royal Nursing College aspires to be a private health professional training colleges
                                which will be recognized for innovation and quality in teaching and learning. The
                                college has plans to provide nurses to take care of the healtcare needs of all categories
                                of people. The college's ideal graduates will be highly competent in their chosen
                                fields,ethical in their behavior, with a developed critical habit of mind,an  appreciation 
                                of the sacred in life,and zeal habit to serving the common good of all.
                               </p>
                            </div>
                            <button onClick = {()=> navigate_path_btn('/contact-us/')}  className="btn">Get in Touch</button>
                            </div>
                            
                        </div>
                        </div>
                    
                    </div>
                </div>

            </div>
        </div>
    </div>

    {/* end of home summary */}




    {/* mj programs */}

        <div className="main_mj_div">
                 <div className="mj_heading">
                    <h1>Explore Our Programmes</h1>
                    <hr className="divider" />;
                </div>
                <div className="mj_programs slide_bottom_hidden">
                    <div className="cards">

                            <input type="radio" id="radio-1" name="radio-card" defaultChecked/>
                            <article className="card" style={{'--angle':'4deg'}}>
                                <img className="card-img" src={web_images.mj_1} alt=""/>
                            <div className="card-data">
                                <span className="card-num">1/5</span>
                                <h2>Diploma in Registered General Nursing</h2>
                                <p>
                                    Our Diploma in Registered General Nursing is a hands-on,
                                     3-year program designed to equip aspiring nurses with the clinical skills,
                                      scientific foundations, and compassionate mindset needed to deliver 
                                      high-quality patient care across diverse healthcare settings.
                                </p>
                                <footer>
                                    <label for="radio-5" aria-label="Previous">&#10094;</label>
                                    <label for="radio-2" aria-label="Next">&#10095;</label>
                                </footer>
                                </div>
                            </article>


                            <input type="radio" id="radio-2" name="radio-card"/>
                            <article className="card" style={{'--angle':'-8deg'}}>
                                <img className="card-img" src={web_images.mj_2} alt=""/>
                                <div className="card-data">
                                <span className="card-num">2/5</span>
                                <h2>Registered Midwifery</h2>
                                <p>
                                    Our Diploma in Registered Midwifery is a rigorous 3-year 
                                    program that prepares compassionate, skilled midwives to 
                                    support women and newborns through the continuum of pregnancy, 
                                    birth, and early postpartum care.
                                </p>
                                <footer>
                                    <label for="radio-1" aria-label="Previous">&#10094;</label>
                                    <label for="radio-3" aria-label="Next">&#10095;</label>
                                </footer>
                                </div>
                            </article>
                        


                            <input type="radio" id="radio-3" name="radio-card"/>
                            <article className="card" style={{'--angle':'-7deg'}}>
                                <img className="card-img" src={web_images.mj_3} alt=""/>
                                <div className="card-data">
                                <span className="card-num">3/5</span>
                                <h2>Diploma in Medical Laboratory Tech</h2>
                                <p>
                                    The Diploma in Medical Laboratory Technology is a 2- to 
                                    3-year hands-on program designed to equip students with the 
                                    skills needed to perform and interpret diagnostic tests that 
                                    underpin patient care.
                                </p>
                                <footer>
                                    <label for="radio-2" aria-label="Previous">&#10094;</label>
                                    <label for="radio-4" aria-label="Next">&#10095;</label>
                                </footer>
                                </div>
                            </article>

                            <input type="radio" id="radio-4" name="radio-card"/>
                            <article className="card" style={{'--angle':'11deg'}}>
                                <img className="card-img" src={web_images.mj_4} alt=""/>
                                <div className="card-data">
                                <span className="card-num">4/5</span>
                                <h2>Health Care Assistant</h2>
                                <p>
                                    The Health Care Assistant program is a practical, one-year course 
                                    that prepares you to deliver compassionate, hands-on support in diverse
                                     healthcare settings. Blending classroom theory with supervised clinical
                                      placements, you’ll learn essential skills—from patient personal care and
                                       vital signs monitoring to basic first aid and infection control.
                                </p>
                                <footer>
                                    <label for="radio-3" aria-label="Previous">&#10094;</label>
                                    <label for="radio-5" aria-label="Next">&#10095;</label>
                                </footer>
                                </div>
                            </article>

                            
                            <input type="radio" id="radio-5" name="radio-card" />
                            <article className="card" style={{'--angle': '13deg'}}>
                                <img className="card-img" src={web_images.mj_5} alt=""/>
                                <div className="card-data">
                                <span className="card-num">5/5</span>
                                <h2>Health Assistant Clinicals</h2>
                                <p>
                                    The Health Assistant Clinical program is a one-year,
                                     three-semester certificate designed to equip you with
                                      the hands-on skills and knowledge to support healthcare
                                       teams in clinical settings.
                                </p>
                                <footer>
                                    <label for="radio-4" aria-label="Previous">&#10094;</label>
                                    <label for="radio-1" aria-label="Next">&#10095;</label>
                                </footer>
                                </div>
                            </article>

                            
                            
                    </div>

                </div>
            </div>

    {/* end mj programs */}


     
   


    {/* home image background */}

        <div className="home_bgimg">
            

            {/* number counts */}

            <div className="home_counts_div slide_bottom_hidden">
            <div class="container">
                <div class="counters">
                    
                    <div class="counter customer">
                    <h2 class="number"><span class="home_counter_value" data-value="24">0</span>k+</h2>
                    <p class="detail">Successfully Educated</p>
                    
                    </div>
                    
                    <div class="counter project">
                    <h2 class="number"><span class="home_counter_value" data-value="95">0</span>%</h2>
                    <p class="detail">Satisfaction Rate</p>
                    <hr />
                    </div>
                    
                    <div class="counter employee">
                    <h2 class="number"><span class="home_counter_value" data-value="24">0</span>k+</h2>
                    <p class="detail">Students Alumni</p>
                    <hr />
                    </div>
                    
                    
                </div></div>
            </div>
            {/* end number counts */}


            <section>

                {/* first home message */}
                <div className="first_message_div zoom_hidden">
                    <div className="first_home_message">
                        <h1>Your Journey Begins Here</h1>

                        <h2>"At every heartbeat lies a story of resilience and hope."</h2>

                        <h3>
                        When you join us, you step into an arena of endless growth and shared purpose. 
                        You're not simply developing expertise—you’re embracing a legacy of hope,
                        where every compassionate act builds bridges to a brighter, kinder future.
                        </h3>

                        <button className="push_button">Join us Now</button>

                    </div>
                </div>

                {/* end first home message */}
            </section>

            
            {/* home_why_div */}
            <div className="main_why">
                <div className="heading">
                    <h2>Why Choose Us</h2>
                    <hr />
                </div>
                <div className="home_why_div">

                <div className="home_why_first">
                    
                    <div class="container">
                        <div className="why_image_div">
                           <div className="card_text">
                            <h3><span>5k+</span> Active Students</h3>
                           </div>
                        </div>
                        
                        <div class="content">
                            <h1>Shaping Tomorrow's Healthcare Leaders</h1>
                            <p>
                                Our thoughtfully designed curriculum integrates in-depth theoretical 
                                instruction with practical, real-world scenarios. This approach not only 
                                sharpens critical thinking and decision-making skills but also cultivates
                                the empathy and resilience essential for meaningful patient interactions. 
                                Supported by experienced faculty who bring passion and industry expertise 
                                to the classroom, you’ll learn from leaders dedicated to shaping the future 
                                of healthcare.
                            </p>

                            <p>
                            Choosing us means embarking on a transformative journey.
                             You won’t just gain the skills to excel as a nurse; you’ll become a
                              well-rounded professional ready to lead, innovate, and make a lasting 
                              impact in the world of healthcare.
                            </p>

                            <button className="push_button">Step into Excellence</button>


                        </div>
                    </div>
                </div>


                <div className="home_why_second">
                    <section>
                        <div class="card green rotate_hidden">
                            <div class="card-header">
                                <div class="date">
                                    Academic Excellence
                                </div>
                           
                            </div>
                            <div class="card-body">
                                <h3>Rigorous Academic Study</h3>
                                <p>Our nursing program champions academic excellence by 
                                    merging rigorous classroom learning with hands-on clinical 
                                    training to shape compassionate, skilled healthcare leaders.</p>
                            </div>
                           
                        </div>
                        <div class="card orange rotate_hidden">
                            <div class="card-header">
                                <div class="date">
                                    Innovative Learning
                                </div>
                           
                            </div>
                            <div class="card-body ">
                                <h3>Embracing Forward-thinking Methods </h3>
                                <p>
                                    We integrate simulation labs, digital tools, 
                                    and real-world problem-solving to prepare students 
                                    for modern healthcare challenges.
                                    This approach encourages creativity, adaptability, 
                                    and critical thinking—key qualities for today’s dynamic 
                                    medical landscape.
                                    </p>
                            </div>
                           
                        </div>
                         <div class="card red rotate_hidden">
                            <div class="card-header">
                                <div class="date">
                                    Career Opportunities
                                </div>
                           
                            </div>
                            <div class="card-body">
                                <h3>Shaping the Future of Healthcare</h3>
                                <p>
                                    Graduates from our nursing program enter 
                                    a wide array of fields. With strong clinical expertise and leadership 
                                    training, they thrive as registered nurses, nurse educators, 
                                    public health officers, and healthcare innovators, 
                                    making a lasting difference wherever they serve.
                                </p>
                            </div>
                           
                        </div>
                        <div class="card blue rotate_hidden">
                            <div class="card-header">
                                <div class="date">
                                    Diverse Community
                                </div>
                           
                            </div>
                            <div class="card-body">
                                <h3>Unity Through Inclusion</h3>
                                <p>
                                    Our nursing program thrives on the 
                                    strength of a diverse community—bringing together individuals 
                                    from different backgrounds, cultures, and perspectives.
                                    Through collaboration and mutual respect, students learn not just from textbooks, 
                                    but from each other, shaping a healthcare future that values every voice.
                                </p>
                            </div>
                           
                        </div>
                    </section>
                </div>

                </div>

             

            </div>
            {/* end home why div */}

        </div>
    {/* end home image bg */}



    {/* Home our teams */}

    <div className="home_teams">
          <div class="wrapper">

            <div class="title">
                <h2>Our Awesome <span>Crew</span></h2>
                <p>We're experts, so you don't have to be.</p>
            </div>

            <div class="card_Container">

                <div class="card slide_bottom_hidden" >

                    <div class="imbBx">
                        <img src={web_images.ms_1} alt=""/>
                    </div>

                    <div class="content">
                        <div class="contentBx">
                            <h3>James Henry <br/><span>Web Analyst</span></h3>
                        </div>
                     
                    </div>

                </div>

                <div class="card slide_bottom_hidden">

                    <div class="imbBx">
                        <img src={web_images.ms_1} alt=""/>
                    </div>

                    <div class="content">
                        <div class="contentBx">
                            <h3>John Doe <br/><span>UI/UX Designer</span></h3>
                        </div>
                       
                    </div>

                </div>

                <div class="card slide_bottom_hidden">

                    <div class="imbBx">
                        <img src={web_images.ms_1} alt=""/>
                    </div>

                    <div class="content">
                        <div class="contentBx">
                            <h3>Mykel Smith <br/><span>Front-End Web Developer</span></h3>
                        </div>
                       
                    </div>

                </div>

                <div class="card slide_bottom_hidden">

                    <div class="imbBx">
                        <img src={web_images.ms_1} alt=""/>
                    </div>

                    <div class="content">
                        <div class="contentBx">
                            <h3>Alex Morgan <br/><span>Back-End Web Developer</span></h3>
                        </div>
                       
                    </div>

                </div>
            </div>

        </div>
    </div>
    {/* Home our team */}



    {/* Gallery */}

        <div className="home_gallery">
                    <div className="title_gallery">
                            <h1>OUR GALLERY</h1>
                            <p>Some Amazing Stuff From Our Campus</p>
                            <hr />
                    </div>
                    <div className="home_image_gallery">
                        <main class="page">
                            <section class="contain">
                            
                            
                                
                                <section class="gallery">
                                    <figure class="gallery__item"><img class="gallery__image" data-index="0" src={web_images.gg_3} alt="A tent in the snowy mountains"/>
                                        <figcaption class="gallery__image__caption">A tent in the snowy mountains</figcaption>
                                    </figure>
                                    <figure class="gallery__item"><img class="gallery__image" data-index="1" src={web_images.gg_1} alt="A river between the mountains"/>
                                        <figcaption class="gallery__image__caption">A river between the mountains</figcaption>
                                    </figure>
                                    <figure class="gallery__item"><img data-index="2" class="gallery__image" src={web_images.gg_2} alt="A river between the mountains"/>
                                        <figcaption class="gallery__image__caption">Rocky mountains</figcaption>
                                    </figure>
                                    <figure class="gallery__item"><img data-index="3" class="gallery__image" src={web_images.gg_4} alt="Trains in a deposit"/>
                                        <figcaption class="gallery__image__caption">Trains in a deposit</figcaption>
                                    </figure>
                                    <figure class="gallery__item"><img data-index="4" class="gallery__image" src={web_images.gg_5} alt="Greeny mountains"/>
                                        <figcaption class="gallery__image__caption">Greeny mountains</figcaption>
                                    </figure>
                                    <figure class="gallery__item"><img data-index="5" class="gallery__image" src={web_images.gg_6} alt="Storm in the sea"/>
                                        <figcaption class="gallery__image__caption">Storm in the sea</figcaption>
                                    </figure>
                                    <figure class="gallery__item"><img data-index="6" class="gallery__image" src={web_images.gg_7} alt="Fog in a valley of trees"/>
                                        <figcaption class="gallery__image__caption">Fog in a valley of trees</figcaption>
                                    </figure>
                                    <figure class="gallery__item"><img data-index="7" class="gallery__image" src={web_images.gg_8} alt="Flying like a bird of prey"/>
                                        <figcaption class="gallery__image__caption">Flying like a bird of prey</figcaption>
                                    </figure>
                                    <figure class="gallery__item"><img data-index="8" class="gallery__image" src={web_images.gg_9} alt="A woman and a dog looking at a foggy valley"/>
                                        <figcaption class="gallery__image__caption">A woman and a dog looking at a foggy valley</figcaption>
                                    </figure>
                                    <figure class="gallery__item"><img data-index="9" class="gallery__image" src={web_images.gg_10} alt="Sea waves"/>
                                        <figcaption class="gallery__image__caption">Sea waves</figcaption>
                                    </figure>
                                    <figure class="gallery__item"><img data-index="10" class="gallery__image" src={web_images.gg_11} alt="Rocky cliffs"/>
                                        <figcaption class="gallery__image__caption">Rocky cliffs</figcaption>
                                    </figure>
                                    <figure class="gallery__item"><img data-index="11" class="gallery__image" src={web_images.gg_12}alt="Mountains seens through a forest"/>
                                        <figcaption class="gallery__image__caption">Mountains seens through a forest</figcaption>
                                    </figure>
                                </section>
                            </section>
                        </main>
                    </div>

                   
                    <div id="lightbox" class="lightbox hidden">
                        <span class="close">&times;</span>
                        <img class="lightbox-img" src="" alt=""/>
                        <button class="nav prev"> <FontAwesomeIcon   className='light_icon' icon = {faCaretLeft}/></button>
                        <button class="nav next"> <FontAwesomeIcon   className='light_icon' icon = {faCaretRight}/></button>
                    </div>


                    <div className="gallary_video">
                            <center>
                                <video controls  playsInline preload="metadata">
                                    <source src={web_images.vvd_1} type="video/mp4"/>
                        
                                    <p>Sorry, your broswer doesn't support embedded videos.</p>
                                </video>


                                    

                                </center>
                    </div>
            
        </div>

    {/* end Gallery */}
    


    {/* Testimonials */}
        <div className="testimonials">
        
            <div className="heading">
                <h2>What’s Student Say?</h2>
                <hr />
            </div>

            <div className="testimonials_sub">
                <div class="testimonial-container">
                    <div class="testimonial-grid">
                        <div class="image-container" id="image-container">
                            <img src={web_images.gg_1} alt="Akosua Mensah" data-index="0" className="testimonial-image" />
                            <img src={web_images.gg_2} alt="Akosua Mensah" data-index="1" className="testimonial-image" />
                            <img src={web_images.gg_3} alt="Akosua Mensah" data-index="2" className="testimonial-image" />
                        </div>
                        <div class="testimonial-content">
                        <div>
                            <h3 class="name" id="name"></h3>
                            <p class="designation" id="designation"></p>
                            <p class="quote" id="quote"></p>
                        </div>
                        <div class="arrow-buttons">
                            
                             <FontAwesomeIcon className="arrow-button" id="prev-button"   icon = {faCaretLeft}/>
                            <FontAwesomeIcon id="next-button"   className="arrow-button" icon = {faCaretRight}/>
                           
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        

        </div>
    {/* end of testimonials */}



    {/* questions */}

    <div className="home_faq">
        <div className="faq_contents">

            <div className="faq_heading">
                <h1>FAQ</h1>
                <h2>Frequently Asked Questions?</h2>
            </div>
            <div className="faq_content">
               
                <div class="faq-container">
                    <div class="faq-item">
                        <div class="faq-question">
                            <p>
                               How do I apply for a Programme
                            </p>
                            <span class="eyes">
                                <FontAwesomeIcon   className='eye open active' icon = {faEye}/>
                                <FontAwesomeIcon  className='eye close' icon = {faEyeSlash}/>
                            </span>
                        </div>
                    <div class="faq-answer">
                        CodePen is an online code editor and learning environment for front-end development.
                    </div>
                    </div>

                     <div class="faq-item">
                        <div class="faq-question">
                            <p>
                                What is the fees involved?
                            </p>
                            <span class="eyes">
                                <FontAwesomeIcon   className='eye open active' icon = {faEye}/>
                                <FontAwesomeIcon  className='eye close' icon = {faEyeSlash}/>
                            </span>
                        </div>
                    <div class="faq-answer">
                        CodePen is an online code editor and learning environment for front-end development.
                    </div>
                    </div>

                     <div class="faq-item">
                        <div class="faq-question">
                            <p>
                                Will I get accomodation on Compus?
                            </p>
                            <span class="eyes">
                                <FontAwesomeIcon   className='eye open active' icon = {faEye}/>
                                <FontAwesomeIcon  className='eye close' icon = {faEyeSlash}/>
                            </span>
                        </div>
                    <div class="faq-answer">
                        CodePen is an online code editor and learning environment for front-end development.
                    </div>
                    </div>

                    
                  
                </div>
            </div>

        </div>

        <div className="faq_image">
            <div class="img-container">
                <img  src={web_images.gg_3} />
            </div>

        </div>

        
    </div>

    {/* end questions */}








    
     
   



    
  </div>
  )
}

export default Home