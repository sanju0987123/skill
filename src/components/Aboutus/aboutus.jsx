/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './aboutus.css';
import Favicon from "react-favicon";
import { FaIcons } from "react-icons/fa";
import Header from "components/Header";
function Services () {
    let message = `RENT OR HIRE FREELANCERS AS YOUR WISH BY AN EFFECTIVE ESCROW TYPE SOLUTION `;
    return (<>
      <Header className=" absolute flex md:flex-col font-quicksand md:gap-5 items-center justify-center w-full z-40 " />
      <section class="section-white">

    <div class="container">
    
        <div class="row">
       
                    <div class="col-md-12 text-center">
                    <h2 class="section-title">About Us </h2>
                          <h2 class="section-ititle">The Team Behind SKILLSPHERE</h2>

                          <p class="section-subtitle">{message}</p>
                          
                    </div> 
             
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />                   
                      <h3>SANJU RAJORA </h3>            
                      <div class="team-info"><p>Head of SKILLSPHERE</p></div>
                      <p>Sanju Rajora is a respected figure in technology, serving as the founder of SkillSphere Education Pvt. Ltd. SkillSphere Education is a pioneering organization committed to revolutionizing educational paradigms through innovative strategies and technological advancements. </p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="https://twitter.com/?lang=en" class="twitter">
                            <i class="fa fa-twitter"></i>
                        </a></li>
                          
                          <li><a href="https://in.pinterest.com/" class="pinterest">
                            <i class="fa fa-pinterest"></i>
                        </a></li>
                          
                          <li><a href="https://www.instagram.com" class="facebook">
                            <i class="fa fa-facebook"></i>
                        </a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble"></i>
                        </a></li>
                          
                      </ul>
                      
                  
                </div>
            </div> 
              
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" class="team-img" alt="pic" />
                     
                      <h3>RISHITA DHAR </h3>
                      
                      <div class="team-info"><p>UI/UX DESIGNER</p></div>
                      <p>As a UI/UX designer, Rishita brings a unique blend of creativity and technical expertise to her craft. With a passion for user-centric design, Rishita is committed to creating digital experiences that are not only visually stunning but also intuitive and user-friendly. <br></br> 
                      <br></br></p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="https://twitter.com/?lang=en" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="https://in.pinterest.com/" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="https://www.instagram.com" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" class="team-img" alt="pic" />
                     
                      <h3>NIKHIL SATWANI </h3>
                      
                      <div class="team-info"><p>Co Founder of SKILLSPHERE</p></div>

                      <p>
Nikhil Satwani is a prominent figure in the field of education and technology, serving as the co-founder of SkillSphere Education Pvt. Ltd. SkillSphere is a dynamic organization focused on enhancing educational experiences through innovative approaches and technology integration. </p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="https://twitter.com/?lang=en" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="https://in.pinterest.com/" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="https://www.instagram.com" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble"></i>
                        </a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
        
        </div> 
    
    </div> 

    </section></>
    )
}

export default Services;