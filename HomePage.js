import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typical from 'react-typical';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hello, My Name is  <br />
          <span>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'Yash Bahadurkar',
                1000, 
              ]}
            />
          </span>
        </h1>
        <p className="para">
          I'm Quick learner and highly energetic having keen aptitude for learning and productively applying new knowledge resourcefully.
        </p>
        <div className='icons'>
          <a href="https://www.linkedin.com/in/yash-bahadurkar-0658a420b/" className="icon-holder">
             <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
          </a>
          <a href="https://github.com/yashbahadurkar/" className="icon-holder" >
            <FontAwesomeIcon icon={faGithub}  className="icon gh"/>     
          </a>
          <a href="https://www.facebook.com/yash.bahadurkar/"className="icon-holder" >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
        </div>
      </header>
    </div>
  )
}

export default HomePage;
