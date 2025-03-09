import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/User";
import "./styles/socials.css";

const Socials = () => {
  return (
    <div className="socials">
      <div className="social">
        <a href={INFO.socials.github} target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </div>
          <div className="social-text">Follow on GitHub</div>
        </a>
      </div>

      <div className="social">
        <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </div>
          <div className="social-text">Follow on LinkedIn</div>
        </a>
      </div>

      <div className="social">
        <a href="https://leetcode.com/u/sudhanssudhan83/" target="_blank">
          <img
            src="icons8-level-up-your-coding-skills-and-quickly-land-a-job-24.png"
            alt="leetcode"
            className="homepage-social-icon"
          />
          <div className="social-text">Follow on leetcode</div>
        </a>
      </div>

      <div className="social">
	  
        <a
          href="https://www.geeksforgeeks.org/user/sudhanss4b9x/"
          target="_blank"
        >
          <img
            src="icons8-geeksforgeeks-26.png"
            alt="gfg"
            className="homepage-social-icon"
          />
          <div className="social-text">Follow on gfg</div>
        </a>
      </div>

      <div className="email">
        <div className="email-wrapper">
          <a
            href={`mailto:${INFO.main.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div className="social-text">{INFO.main.email}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
