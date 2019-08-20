import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import './Home.css';
import Landscape from '../../Landscape.svg';
import Services from '../../Services.svg';
import Customise from '../../Customise.svg';
import AboutUs from '../../AboutUs.svg';
import Contact from '../../Contact.svg';
import extensions from '../../extensions-icon.svg';
import manicures from '../../manicures-icon.svg';

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
              <li><img alt="Pedicures icon" src="https://via.placeholder.com/75" /><br />Pedicures</li>
              <li><img alt="BIAB icon" src="https://via.placeholder.com/75" /><br />BIAB</li>
              <li><img alt="Hard Gel icon" src="https://via.placeholder.com/75" /><br />Hard Gel</li>
            </ul>
            <div className="pricelist-container">
              <div><h3>Price List item - <span>£20</span></h3></div>
              <div><h3>Price List item - <span>£20</span></h3></div>
              <div><h3>Price List item - <span>£20</span></h3></div>
              <div><h3>Price List item - <span>£20</span></h3></div>
              <div><h3>Price List item - <span>£20</span></h3></div>
              <div><h3>Price List item - <span>£20</span></h3></div>
              <div><h3>Price List item - <span>£20</span></h3></div>
              <div><h3>Price List item - <span>£20</span></h3></div>
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
              <div id="intro"><h4>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h4></div>
              <div>lol</div>
              <div>lol</div>
              <div>lol</div>
              <div>lol</div>
              <div>lol</div>
              <div>lol</div>
              <div>lol</div>
            </div>
          </div>
        </div>
        <div className="slant-container">
          <div id="third-slant">
            <svg className="slant" viewBox="0 0 1 1" preserveAspectRatio="none">
              <polygon id="slant-three" points="0,1 1,1 1,0" />
            </svg>
            <div className="heading">
              <object className="svg-heading" type="image/svg+xml" height="75px" data={Customise}>Customise</object>
            </div>
          </div>
          <div className="slant-content" id="customise-content">
            <hr id="alt" />
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
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
