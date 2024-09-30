import React from 'react';

//components
import Navbar from '../components/Navbar'

//assets
import Contact from '../assets/contact-us.svg'
import AddressIcon from '../assets/address-icon.svg'
import PhoneIcon from '../assets/phone-icon.svg'
import EmailIcon from '../assets/email-icon.svg'

//css
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="content">
        <Navbar />
        <div className="contact-container">
            <div className="contact-info">
                <h2>Get In Touch</h2>
                <div className="contactheader">
                    <img src={Contact} alt="Contact Us"/>
                </div>
                <p>
                Let our friendly team get in touch with you and provide helpful information.
                The more you tell us, the quicker we can assist you.
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={AddressIcon} alt="Address" className="icon"/>
                        <div className="contact-text">
                            <h3>Address</h3>
                            <p>123 Any St., Any City, Bicol, Philippines</p>
                        </div>
                    </div>
                    <div className="contact-detail">
                        <img src={PhoneIcon} alt="Phone" className="icon"/>
                        <div className="contact-text">
                            <h3>Phone Number</h3>
                            <p>+63 123 456 7890</p>
                        </div>
                    </div>
                    <div className="contact-detail">
                        <img src={EmailIcon} alt="Email" className="icon"/>
                        <div className="contact-text">
                            <h3>E-Mail</h3>
                            <p>archive@gmail.com</p>
                        </div>
                        </div>
                </div>
            </div>

            <div className="contact-form">
                <h2>Send a Message</h2>
                <form>
                <div className="text-email-row">
                    <div className="contact-name">
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="contact-email">
                        <input type="email" placeholder="E-mail Address" required />
                    </div>
                </div>
                <textarea placeholder="Type your message here" required></textarea>
                <div className="button-container">
                    <button type="submit">Submit</button>
                </div>
                </form>
            </div>
        </div>
        
        <div className="footer">
            <div className="footer-options">
                <a href="">About</a>
                <a href="">Privacy</a>
                <a href="">Contact Us</a>
            </div>
            <div className="footer-information">
                <span>© 2024 Ateneo de Naga University, Ateneo Avenue, Naga City,
                4400 Philippines</span>
            </div>
        </div>
        <div className="yellow-block"></div>
    </div>
  );
};

export default ContactUs;
