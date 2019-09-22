import React from "react";
import Navigation from './Navigation/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <div>
      <Navigation />
      <h1>Book an Appointment</h1>
      <h2>Coming Soon</h2>
      <h3>However, until then, you can book an appointment by contacting me on 07951476008</h3>
      <h3>Or messaging me on social meida:</h3>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ejvnails/"><FontAwesomeIcon icon={['fab', 'instagram']} size="6x" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ejvnails/"><FontAwesomeIcon icon={['fab', 'facebook']} size="6x" /></a>

    </div>
  );
};

export default Contact;
