import React from 'react';
import yash2 from '../img/yash2.jpeg'

function ImageSection() {
  return (
    <div className="ImageSection">
        <div className="img">
            <img src={yash2} alt=""/>
        </div>
        <div className="about-info">
            <h4>I am <br/><span>Yash Bahadurkar</span></h4>
            <p className="about-text">
                recently graduated from Rajiv Gandhi College of Engineering and Research in Computer Science Engineering.
                Actively looking form an opportunity where i can implement my theoretical knowledge into practical. I consider myself 
                as a focus person and work towards my goal in a very efficient manner. 
            </p>
            <div className="about-detail">
                <div className="name-details">
                    <p>Full Name : Yash Gopal Bahadurkar</p>
                </div>
                <div className="name-details">
                    <p>Age : 22</p>
                </div>
                <div className="name-details">
                    <p>Nationality : Indian</p>
                </div>
                <div className="name-details">
                    <p>Degree : B.E. (Computer Science Engineering) </p>
                </div>
                <div className="name-details">
                    <p>Address : Nagpur, Maharashtra</p>
                </div>
                <div className="name-details">
                    <p>Country : India</p>
                </div>
            </div>
        </div>
    </div>
  )
}



export default ImageSection;