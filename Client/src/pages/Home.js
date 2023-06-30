import React from 'react'
import landing from '../homeassets/landingpageimg.svg'
import primises from '../homeassets/1234.svg'
import reviewicon from '../homeassets/1.svg'
import review1 from '../homeassets/re1.svg'
import review2 from '../homeassets/re2.svg'
import review3 from '../homeassets/re3.svg'
import logo from '../assets/Rectangle 51.png'
import routeopti from '../homeassets/routehai.svg'
import realtime from '../homeassets/realtimetracking.svg'
import analytic from '../homeassets/analytic.svg'
import pathselection from '../homeassets/pathselection.svg'
import insidepr from '../homeassets/321.png'
import outside from '../homeassets/345.png'
import { Link } from 'react-router-dom'

import './Home.css'
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { RiTelegramLine } from "react-icons/ri";
import { BsFillStarFill } from "react-icons/bs";
import Footer from './Footer' 




const Home = () => {
  return (
    <div className='wrapup'>
      <section className='firstabout'>
        <div className='aboutmainview'>
          <div className='mainview-left'>
            <div className='maintextheading'>Streamline Your Ride Booking Experience with Our Tracking Website </div>
            <div className='exploreabout'> <button className='btnsweet'>Explore more</button> </div>
          </div>
          <div className='landingimagehai' >

            <img src={landing} alt="Students"
              widht={55}
              height={49}
              loading='lazy'
              className="visionimagehai"
            />


          </div>
        </div>

      </section>

      <section>
        <div className='primisesdivhai'>
          <div className='insideprimisis'>
            <div className='sudharna'><img src={insidepr} alt="Students"
              widht={55}
              height={49}
              loading='lazy'
              className='meraparesani'

            /></div>
            <div className='headingprimises'>INSIDE PREMISES</div>
            <div className='textprimises'>Welcome to our plant transportation service, where we offer convenient and efficient rides within our facility. Whether you need to travel between different sections of the plant, visit specific workstations, or reach important meetings on time, our dedicated transportation system is here to assist you.</div>
            <div>  <Link to= '/services'><button className='btnsweet'> Click to Enter</button></Link> </div>
          </div>
          <div className='insideprimisis'>
            <div className='sudharna'> <img src={outside} alt="Students"
              widht={55}
              height={49}
              loading='lazy'
              className='meraparesani'

            /></div>
            <div className='headingprimises'>OUTSIDE PREMISES</div>
            <div className='textprimises'>We understand that there may be times when you need transportation services beyond the boundaries of our plant. Whether it's attending off-site meetings, running errands, or traveling to nearby locations, our reliable and convenient ride booking service is here to cater to your needs.</div>
            <div> <Link to= '/services'><button className='btnsweet'> Click to Enter</button></Link> </div>
          </div>
        </div>
      </section>

      <section>
        <div className='vichiledivhai'>
          <div className='vechieleselection'>Vehicle Selection Process</div>
          <div className='textselectionprocess'>A4 network provide you a simplest way to select your seat with help of illustration and map so that you can easily use our interface.</div>
               <div className='selctionpathclass'>   <img src={pathselection} alt="Students"
                  widht={55}
                  height={49}
                  loading='lazy'
                  

                />
                 </div>
        </div>
      </section>

      <section>
        <div>
          <div className='Reviewhaibhai'>Review’s</div>
          <div className='reviewsectionhai'>
            <div className='singlereview'>
              <div className='imageiconscom'>
                
                <div className='imagekabaap'> <img src={reviewicon} alt="Students"
                  widht={55}
                  height={49}
                  loading='lazy'
                  className='primisesimago'

                /></div>
                <div> <img src={review3} alt="Students"
                  widht={55}
                  height={49}
                  loading='lazy'
                  className='primisesimagehaii'

                /></div>
              </div>
              <div className='reviewtexthai'> whole journey was good and effective . We are four persons in journey  enjoying well “</div>
              <div className='starthai'><BsFillStarFill/> <BsFillStarFill/><BsFillStarFill/><BsFillStarFill/> </div>
              <div className='namereview'>-Sophia from India</div>
            </div>
            <div className='singlereview'>
              <div  className='imageiconscom'>
               
                <div className='imagekabaap'> <img src={reviewicon} alt="Students"
                  widht={55}
                  height={49}
                  loading='lazy'
                  className='primisesimago'

                /></div>
                <div> <img src={review2} alt="Students"
                  widht={55}
                  height={49}
                  loading='lazy'
                  className='primisesimagehaii'

                /></div>
              </div>
              <div className='reviewtexthai'>My bus ride from dhanbad to bokaro was amazing, spotlessly clean bus No words</div>
              <div className='starthai'><BsFillStarFill/> <BsFillStarFill/><BsFillStarFill/><BsFillStarFill/> </div>
              <div className='namereview' >-Aman from India</div>
            </div>
            <div className='singlereview'>
              <div  className='imageiconscom'>
                
                <div className='imagekabaap'> <img src={reviewicon} alt="Students"
                  widht={55}
                  height={49}
                  loading='lazy'
                  className='primisesimago'

                /></div>
                <div> <img src={review1} alt="Students"
                  widht={55}
                  height={49}
                  loading='lazy'
                  className='primisesimagehaii'

                /></div>
              </div>
              <div className='reviewtexthai'>My bus ride from dhanbad to bokaro was amazing, spotlessly clean bus No words.</div>
              <div className='starthai'><BsFillStarFill/> <BsFillStarFill/><BsFillStarFill/><BsFillStarFill/> </div>
              <div className='namereview' >-Akshay from India</div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div>
          <div className='whatwedohm'>What We Do</div>
          <div className='whatwedodivhai'>
            <div className='whatwedodiv1'>
              <div className='iconplacement'>
              <div className='imagekabaap'> <img src={realtime} alt="Students"
                  widht={55}
                  height={49}
                  loading='lazy'
                  className='primisesimag'

                /></div>
                 </div>
              <div className='headingwhatwedo'>Real-Time Bus Tracking:</div>
              <div className='whatwetext'>Our system utilizes GPS and cellular   to track buses in real time. Passengers can conveniently access accurate arrival and departure times, allowing them to plan their journeys more effectively.</div>
            </div>
            <div  className='whatwedodiv1'>
              <div className='iconplacement'>
              <div className='imagekabaap'> <img src={routeopti} alt="Students"
                  widht={55}
                  height={49}
                  loading='lazy'
                  className='primisesimag'

                /></div>
                 </div>
              <div className='headingwhatwedo'> Route Optimization:  </div>
              <div className='whatwetext'>We go beyond tracking and offer  intelligent route optimization solutions. By analyzing traffic patterns, passenger demand, and other factors, our system suggests optimal routes for buses to minimize travel time,</div>
            </div>

            <div  className='whatwedodiv1'>
              <div className='iconplacement'>
              <div className='imagekabaap'> <img src={analytic} alt="Students"
                  widht={55}
                  height={49}
                  loading='lazy'
                  className='primisesimag'

                /></div>
              
              </div>
              <div className='headingwhatwedo'>Data Analytics and Reporting:</div>
              <div className='whatwetext' >We provide comprehensive data analytics and reporting tools to help administrators and operators make informed decisions.
                Our system collects and analyzes data .</div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className='backgroundcontact'>
          <div className='imagecontact'> <img src={landing} alt="Students"
              widht={55}
              height={49}
              loading='lazy'
              className="contactkaimage"
            />
            </div>

          <div  className='formcontacthai'>
             <div className='headingcontact'>
             <img src={logo} alt= "logo " width={65} height={32} loading='lazy'/>
               <div className='a4network'>Network</div>
              </div>
          <div className='texxtformcenter'>
            <div className='contacthai'>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eius</div>
            <div><input className='inputcontact' type='text' placeholder='Your Name'></input></div>
            <div><input className='inputcontact' type='email' placeholder='Email'></input></div>
            <div><textarea className='inputcontact' type='text' placeholder='Text'></textarea></div>
            <div ><button className='btncontacthai'>Get in Touch With Us</button></div>
            <div className='socialmedaiicons'>
              <div><BsInstagram className='icons' /></div>
              <div><FaFacebookF className='icons' /></div>
              <div><BsMessenger className='icons' /></div>
              <div><RiTelegramLine className='icons' /></div>
            </div>
            </div>
          </div>
        </div>
      </section>

      
         <Footer/>
     
   




    </div>
  )
}

export default Home