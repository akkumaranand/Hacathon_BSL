import React from 'react'
import './about.css'
import aboutimage from '../aboutassets/mainillustrator.svg'
import vision1 from '../aboutassets/vision.svg'
import mission from '../aboutassets/mission.svg'
import goal from '../aboutassets/goal.svg'
import circle from '../aboutassets/circleshadow.svg'
import obj1 from '../aboutassets/obj1.svg'
import obj2 from '../aboutassets/obj2.svg'
import obj3 from '../aboutassets/obj3.svg'
import sponsers from '../aboutassets/sponsers.svg'
import Anand from '../aboutassets/Anand.svg'
import map from '../aboutassets/map.svg'
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { RiTelegramLine } from "react-icons/ri";
import Footer from './Footer'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='wrappperabout'>
      <section className='firstabout'>
        <div className='aboutmainview'>
          <div className='mainview-left'>
            <div className='maintextheading'>Streamline Your Ride Booking Experience with Our Tracking Website </div>
            <div className='exploreabout'> <button className='btnsweet'>Explore more</button> </div>
          </div>
          <div className='mainview-right'>

            <img src={aboutimage} alt="Students"
              widht={55}
              height={49}
              loading='lazy'
              className="visionimagehai"
            />


          </div>
        </div>

      </section>
      <section className='firstabout'>
        <div className='firstabout'>
          <div className='about-service'>
            <div className='btnsweetoo'> About</div>
            <div className='btnsweetoo'> <Link to= '/services'>Services</Link></div>
          </div>
          <div className='about-life'>
            <div className='visionabout'>
              <div className='uppervision-part'>
                <img src={vision1} alt="Students"
                  widht={558}
                  height={490}
                  loading='lazy'
                  className="imgageillustrator"
                />
              </div>
              <div className='lowervision-part'>
                <div className='aboutlifeheading'>Vision</div>
                <div className='vision-text'> we envision providing seamless and reliable ride booking services not only within our plant but also beyond its boundaries.</div>
              </div>
            </div>
            <div className='visionabout'>
              <div className='uppervision-part'>
                <img src={mission} alt="Students"
                  widht={558}
                  height={490}
                  loading='lazy'
                  className="imgageillustrator"
                />
              </div>
              <div className='lowervision-part'>
                <div className='aboutlifeheading'>Mission</div>
                <div className='vision-text'>  our mission is to offer efficient and reliable ride booking services beyond the boundaries of our plant.</div>
              </div>
            </div>
            <div className='visionabout'>
              <div className='uppervision-part'>
                <img src={goal} alt="Students"
                  widht={558}
                  height={490}
                  loading='lazy'
                  className="imgageillustrator"
                />
              </div>
              <div className='lowervision-part'>
                <div className='aboutlifeheading'>Goal</div>
                <div className='vision-text'> Our goal is to establish ourselves as the premier ride booking service, offering reliable transportation solutions beyond the boundaries of our plant.</div>
              </div>
            </div>

          </div>

        </div>
      </section>
      <section className='objectivesponsers' >
        <div>
          <div className='aboutour-objective'>
            <div className='headingobjective'> Objectives</div>
            <div className='placementkarnahai'>
              <div className='object1'>
                <div className='imageplacement'  >
                  <img src={circle} alt="Students"
                    widht={558}
                    height={490}
                    loading='lazy'
                    className="imgageillur"
                  />
                  <img src={obj1} alt="Students"
                    widht={558}
                    height={490}
                    loading='lazy'
                    className="objilluuu"
                  />
                </div>
                <div className='textobjective'>We have successfully expanded our service coverage to include a broader range of destinations outside the plant.</div>
              </div>
              <div className='object1'>
                <div className='imageplacement'>
                  <img src={circle} alt="Students"
                    widht={558}
                    height={490}
                    loading='lazy'
                    className="imgageillur"
                  />
                  <img src={obj2} alt="Students"
                    widht={558}
                    height={490}
                    loading='lazy'
                    className="objilluuu"
                  />

                </div>
                <div className='textobjective'>We have implemented rigorous safety and security measures to ensure the well-being of our customers during their journeys.</div>
              </div>
              <div className='object1'>
                <div className='imageplacement'>

                  <img src={circle} alt="Students"
                    widht={558}
                    height={490}
                    loading='lazy'
                    className="imgageillur"
                  />
                  <img src={obj3} alt="Students"
                    widht={558}
                    height={490}
                    loading='lazy'
                    className="objilluuu"
                  />
                </div>
                <div className='textobjective'>We believe in long term orientation with our diversified business model thus making us stand out in the industry</div>
              </div>

            </div>
            <div className='aboutour-client'>
              <div className='headingobjective'> Our Clients</div>
              <img src={sponsers} alt="Students"
                widht={558}
                height={490}
                loading='lazy'
                className='ourcclientimage'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='ourteamshow'>
        <div className='headingobjective'> Our Team</div>
        <div className='teamstatus'>
          <div className='teamimage'>
            <img src={Anand} alt="Students"
              widht={558}
              height={490}
              loading='lazy'
              className="Ananpichai"
            />
            <div className='founderco'><span className='personname'>Anand keshri</span> <br />Founder, CEO, Com.</div>

          </div>

          <div className='textareaabout'>
            <div className='personabouttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
            <div> buttons </div>
          </div>
        </div>
      </section>
      <section>
      
             <div className='maphaibhai' >
                   <div className='laction-divtext'>
                      <div className='mapheading'>Where are we Located?</div>
                      <div className='maptextabout'>A4 Services offers a cutting-edge tracking website that revolutionizes the way you track and monitor various activities. With our advanced technology and user-friendly interface, you'll have access to comprehensive tracking features all in one place.
                      Let’s meet!!</div>
                     <div className='addressmaptext'>Hostel no-26,BIT <br></br> Sindri,Sindri,Dhanbad,Jharkhand</div>
                     <div className='socialmedaiicons'>
                          <div><BsInstagram className='icons'/></div>
                          <div><FaFacebookF className='icons'/></div>
                          <div><BsMessenger className='icons'/></div>
                         <div><RiTelegramLine className='icons'/></div>
                     </div>

                   </div>

                  <div className='imagemap'>

                   <img src={map} alt="Students"
                   widht={558}
                    height={490}
                    loading='lazy'
                     className='mapimagehaibhai'
                    />
                 </div>
           
        </div>
      </section>
      <section>
        <div>
          <div className='constactusformabout'>
            <div className='contactaboutheading'>Do we have everything you're looking for?</div>
            <div className='contactaboutsubheading'>Drop us your contact details, We are always more than happy to help.</div>
            
          </div>
          <div> <Footer/>  </div>
        </div>
      </section>

    </div>
  )
}

export default About













                    