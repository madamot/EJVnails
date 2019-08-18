import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import './Home.css';
import Landscape from '../../Landscape.svg';
import Services from '../../Services.svg';
import Customise from '../../Customise.svg';
import AboutUs from '../../AboutUs.svg';
import Contact from '../../Contact.svg';

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
              <object className="svg-heading" type="image/svg+xml" height="100px" data={Services}>Services</object>
            </div>
          </div>
          <div className="slant-content" id="services-content">
          </div>
        </div>
        <div className="slant-container">
          <div id="second-slant">
            <svg className="slant" viewBox="0 0 1 1" preserveAspectRatio="none">
              <polygon id="slant-two" points="0,1 1,1 1,0" />
            </svg>
            <div className="heading">
              <object className="svg-heading" type="image/svg+xml" height="100px" data={AboutUs}>Instagram</object>
            </div>
          </div>
          <div className="slant-content" id="aboutus-content">

          </div>
        </div>
        <div className="slant-container">
          <div id="third-slant">
            <svg className="slant" viewBox="0 0 1 1" preserveAspectRatio="none">
              <polygon id="slant-three" points="0,1 1,1 1,0" />
            </svg>
            <div className="heading">
              <object className="svg-heading" type="image/svg+xml" height="100px" data={Customise}>Instagram</object>
            </div>
          </div>
          <div className="slant-content" id="customise-content">

          </div>
        </div>
        <div className="slant-container">
          <div id="fourth-slant">
            <svg className="slant" viewBox="0 0 1 1" preserveAspectRatio="none">
              <polygon id="slant-four" points="0,1 1,1 1,0" />
            </svg>
            <div className="heading">
              <object className="svg-heading" type="image/svg+xml" height="100px" data={Contact}>Instagram</object>
            </div>
          </div>
          <div className="slant-content" id="contact-content">

          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
