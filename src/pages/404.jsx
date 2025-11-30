import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../component/common/NavBar";
import Logo from "../component/common/Logo";

import INFO from "../data/User";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="notfound-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								404 <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">
								Oops! We can't seem to find the page you're looking for.
								<br />
								The page "{window.location.pathname}" doesn't exist.
							</div>
							<div className="not-found-suggestions">
								<p>Here are some helpful links instead:</p>
							</div>
							<div className="not-found-links">
								<a href="/" className="not-found-link">
									Home
								</a>
								<a href="/projects" className="not-found-link">
									Projects
								</a>
								<a href="/about" className="not-found-link">
									About
								</a>
								<a href="/contact" className="not-found-link">
									Contact
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
