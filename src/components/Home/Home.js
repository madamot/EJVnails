import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import './Home.css';
import Services from '../../Services.svg';
import Instagram from '../../Instagram.svg';

const Home = () => {
  return (
    <div>
      <Navigation />

      <div className="home-container">
        <div className="first"></div>
        <div className="second-container">
          <div id="top-slant">
            <div className="heading">
              <object type="image/svg+xml" height="100px" data={Services} className="heading">Services</object>
            </div>
            <svg id="thirdslant" className="slant" viewBox="0 0 1 1" preserveAspectRatio="none">
              <polygon id="slant-one" points="0,1 1,1 1,0" />
            </svg>
          </div>
          <div className="fill">
          </div>
        </div>
        <div className="third-container">
          <div id="third-slant">
            <div className="heading">
              <object type="image/svg+xml" height="150px" data={Instagram} className="heading">Instagram</object>
            </div>
            <svg id="thirdslant" className="slant" viewBox="0 0 1 1" preserveAspectRatio="none">
              <polygon id="slant-two" points="0,1 1,1 1,0" />
            </svg>
          </div>
        </div>
        <div className="fourth">

        </div>
      </div>

    </div>
  );
};

export default Home;
