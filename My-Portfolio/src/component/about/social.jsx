import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/User";
import "./styles/socials.css";

// SVG Icons as React components
const LeetCodeIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    width="15"
    height="15"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.884 2.133 8.094-.069l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
  </svg>
);

const GeeksForGeeksIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    width="15"
    height="15"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
    <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
  </svg>
);

const Socials = () => {
  return (
    <div className="socials">
      <div className="social">
        <a href={INFO.socials.github} target="_blank" rel="noreferrer" title="GitHub Profile">
          <div className="social-icon">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </div>
          <div className="social-text">Follow on GitHub</div>
        </a>
      </div>

      <div className="social">
        <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn Profile">
          <div className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </div>
          <div className="social-text">Follow on LinkedIn</div>
        </a>
      </div>

      <div className="social">
        <a href="https://leetcode.com/u/sudhanssudhan83/" target="_blank" rel="noreferrer" title="LeetCode Profile">
          <div className="social-icon">
            <LeetCodeIcon className="social-icon" />
          </div>
          <div className="social-text">Follow on LeetCode</div>
        </a>
      </div>

      <div className="social">
        <a
          href="https://www.geeksforgeeks.org/user/sudhanss4b9x/"
          target="_blank"
          rel="noreferrer"
          title="GeeksforGeeks Profile"
        >
          <div className="social-icon">
            <GeeksForGeeksIcon className="social-icon" />
          </div>
          <div className="social-text">Follow on GeeksforGeeks</div>
        </a>
      </div>

      <div className="email">
        <div className="email-wrapper">
          <a
            href={`mailto:${INFO.main.email}`}
            target="_blank"
            rel="noreferrer"
            title="Send Email"
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