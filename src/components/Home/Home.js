import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import './Home.css';
import Landscape from '../../Landscape.svg';
import Services from '../../Services.svg';
import Customise from '../../Customise.svg';
import AboutUs from '../../AboutUs.svg';
import Contact from '../../Contact.svg';
import { NavLink } from "react-router-dom";
import extensions from '../../extensions-icon.svg';
import manicures from '../../manicures-icon.svg';
import biab from '../../BIAB-icon.svg';
import hardgel from '../../hardgel-icon.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faCheckSquare, faCoffee)

const Home = () => {
  return (
    <div>
      <Navigation />

      <div className="home-container">
        <div className="first">
          <object id="landscape" type="image/svg+xml" data={Landscape}>Services</object>
        </div>
        <div className="slant-container">
          <div id="top-slant">
            <svg className="slant" id="landscape-slant" viewBox="0 0 1 1" preserveAspectRatio="none">
              <polygon id="slant-one" points="0,1 1,1 1,0" />
            </svg>
            <div className="heading">
              <object className="svg-heading" type="image/svg+xml" height="75px" data={Services}>Services</object>
            </div>
          </div>
          <div className="slant-content" id="services-content">
            <hr/>
            <ul id="service-icons">
              <li>
                <img alt="Extensions icon" src={extensions} height="100px" />
                <br /><br />Extensions
              </li>
              <li>
                <img alt="Manicures icon" src={manicures} height="100px" />
                <br /><br />Manicures
              </li>
              <li>
                <img alt="BIAB icon" src={biab} height="100px" />
                <br /><br />BIAB</li>
              <li>
                <img alt="Hard Gel icon" src={hardgel} height="100px" />
                <br /><br />Hard Gel</li>
            </ul>
            <div className="pricelist-container">
              <div>
                <h3>Gel colour on natural nails/toes - <span>£22</span></h3>
                <p>Includes file, shape, cuticle work, application of The Gel Bottle colour and cuticle oil.</p>
              </div>
              <div>
                <h3>Fingers and toes gel application - <span>£40</span></h3>
                <p>Includes file, shape, cuticle work, application of The Gel Bottle colour and cuticle.</p>
              </div>
              <div>
                <h3>Nails/Toes with Rubber base - <span>Add £2 on top of normal gel application price</span></h3>
                <p>Application of The Gel Bottle Rubber base underneath gel colour which improves the strength of your gel manicure- ideal for flaky, brittle or splitting nails.</p>
              </div>
              <div>
                <h3>BIAB (Builder in a bottle) overlay with gel colour - <span>£25</span></h3>
                <p>Includes file, shape, cuticle work, application of The Gel Bottle Builder In a Bottle (BIAB)- which is ideal for those who wish to grow their natural nails, BIAB is applied over natural nails and protects nails which are prone to breaking- a gel colour can be applied over the top or the BIAB can be left nude- finished with cuticle oil.</p>
              </div>
              <div>
                <h3>BIAB extensions with a gel colour on top - <span>£32</span></h3>
                <p>Includes file, shape, cuticle work, nails extended a small amount with The Gel Bottle Builder in a Bottle- finished with either a Gel Bottle Colour or can be left the BIAB colour- finished with cuticle oil.</p>
              </div>
              <div>
                <h3>Hard gel extensions with a colour on top - <span>£35</span></h3>
                <p>Includes file, shape, cuticle work, nails extended with The Gel Bottle Hard Gel- finished with either a Gel Bottle Colour or left Hard Gel Colour- finished with cuticle oil.</p>
              </div>
              <div id="note"><h3>**Note: for short extensions BIAB is okay however for longer extensions Hard Gel will be needed.</h3></div>
              <div>
                <h3>Ombre - <span>Add £5 to treatment price</span></h3>
              </div>
              <div>
                <h3>Manicure - <span>£12</span></h3>
                <p>File, shape, cuticle work, peacci nail lacquer colour finished with cuticle oil.</p>
              </div>
              <div>
                <h3>Mini Manicure - <span>£8</span></h3>
                <p>File, shape cuticle work finished with cuticle oil.</p>
              </div>
              <div>
                <h3>BIAB (Builder in a Bottle) infills natural nails - <span>£20</span></h3>
                <p>Includes file off of colour, re-shape, cuticle work, re-pplication of The Gel Bottle Builder In a Bottle (BIAB)- which is ideal for those who wish to grow their natural nails, BIAB is applied over natural nails and protects nails which are prone to breaking- a gel colour can be applied over the top or the BIAB can be left nude- finished with cuticle oil.</p>
              </div>
              <div>
                <h3>Biab infills on extensions - <span>£27</span></h3>
                <p>Includes file off of colour, re-shape, cuticle work, The Gel Bottle Builder in a Bottle reapplied onto extensions- finished with either a Gel Bottle Colour or can be left the BIAB colour- finished with cuticle oil.</p>
              </div>
              <div>
                <h3>Hard gel infills - <span>£30</span></h3>
                <p>Includes file off of colour, re-shape, cuticle work, The Gel Bottle Hard Gel reapplied onto extensions- finished with either a Gel Bottle Colour or can be left the BIAB colour- finished with cuticle oil.</p>
              </div>
              <div>
                <h3>Removal and Reapplication - <span>Add £4 to treatment price</span></h3>
              </div>
              <div>
                <h3>Removal and mini manicure - <span>£8</span></h3>
                <p>Old gel manicure removed, file, shape, cuticle work and cuticle oil applied.</p>
              </div>
              <div>
                <h3>Polish on toes - <span>£10</span></h3>
                <p>File, shape, cuticle work and peacci polish applied- finished with cuticle oil.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slant-container">
          <div id="second-slant">
            <svg className="slant" viewBox="0 0 1 1" preserveAspectRatio="none">
              <polygon id="slant-two" points="0,1 1,1 1,0" />
            </svg>
            <div className="heading">
              <object className="svg-heading" type="image/svg+xml" height="75px" data={AboutUs}>About Us</object>
            </div>
          </div>
          <div className="slant-content" id="aboutus-content">
            <hr/>
            <div className="about-container">
              <div id="intro"><h4>Hello, I'm Emily,<br />
              Primary Education student at the University of Winchester and currently living in Fareham - I provide nail services with the best product and highest skill.</h4>
              </div>
              <div id="col1">
                <h5>What started out as a hobby about 2 years ago, being bought a gel kit from my mum on my birthday has turned into something much bigger. Since then I have spent way too much money trying out different brands and technologies trying to find the perfect product for me and my clients.</h5>
                <h5>The Gel Bottle is my brand of choice and what I swear by... blah blah blah idk</h5>
              </div>
              <div id="col2">
                <h5>Since moving from London and starting University I am offering services on and around campus, Winchester, Fareham and everywhere in between.</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="slant-container">
          <div id="third-slant">
            <svg className="slant" viewBox="0 0 1 1" preserveAspectRatio="none">
              <polygon id="slant-three" points="0,1 1,1 1,0" />
            </svg>
            <NavLink to="/customiser">
              <div className="heading">
                <object className="svg-heading" type="image/svg+xml" height="75px" data={Customise}>Customise</object>
              </div>
            </NavLink>
          </div>
          <div className="slant-content" id="customise-content">
            <hr id="alt" />
            <h4 className="alttext">The Customiser allows you to visually build and create your own set before booking an appointment.</h4>
            <ol className="custom-list">
              <li className="custom-list-item"><h4 className="alttextlist">You can choose from a range of different services that we have to offer from our huge collection: this includes the ability to alter between our range of colours, shapes and bases.</h4></li>
              <li className="custom-list-item"><h4 className="alttextlist">Each selection you make will show you how much that service will cost.</h4></li>
              <li className="custom-list-item"><h4 className="alttextlist">Once you're happy you can choose to share it with your friends for their opinion or book an appointment with Emily to get what you created!</h4></li>
            </ol>

          </div>
        </div>
        <div className="slant-container">
          <div id="fourth-slant">
            <svg className="slant" viewBox="0 0 1 1" preserveAspectRatio="none">
              <polygon id="slant-four" points="0,1 1,1 1,0" />
            </svg>
            <div className="heading">
              <object className="svg-heading" type="image/svg+xml" height="75px" data={Contact}>Contact</object>
            </div>
          </div>
          <div className="slant-content" id="contact-content">
            <hr/>
            <h2>Ask me a question or arrange an appointment at:</h2>
            <h1>07951476008</h1>
            <br />
            <h2>Follow me on Social Media:</h2>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ejvnails/"><FontAwesomeIcon icon={['fab', 'instagram']} size="6x" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ejvnails/"><FontAwesomeIcon icon={['fab', 'facebook']} size="6x" /></a>
          </div>
          <div id="fifth-slant">
            <svg className="slant" viewBox="0 0 1 1" preserveAspectRatio="none">
              <polygon id="slant-five" points="0,1 1,1 1,0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
