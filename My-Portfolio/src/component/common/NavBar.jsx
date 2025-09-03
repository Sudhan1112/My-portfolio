import { faCloudMoon, faSun, faHome, faUser, faCode, faTrophy, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light-theme"
	);

	// change theme function
	const themeToggle = () => {
		if (theme === "light-theme") {
			setTheme("dark-theme");
		} else {
			setTheme("light-theme");
		}
	};

	// save the theme preference to local storage
	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					{/* Desktop/Tablet Navigation */}
					<div className="nav-background desktop-nav">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "achievements"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/achievements">Achievements</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
							<li
								className="nav-item-icon"
								onClick={() => themeToggle()}
							>
								{theme === "light-theme" ? (
									<FontAwesomeIcon icon={faCloudMoon} />
								) : (
									<FontAwesomeIcon icon={faSun} />
								)}
							</li>
						</ul>
					</div>

					{/* Mobile Navigation - Icon Based */}
					<div className="mobile-nav">
						<div className="mobile-nav-background">
							<Link 
								to="/" 
								className={`mobile-nav-item ${active === "home" ? "active" : ""}`}
								data-title="Home"
							>
								<FontAwesomeIcon icon={faHome} />
								<span>Home</span>
							</Link>
							
							<Link 
								to="/about" 
								className={`mobile-nav-item ${active === "about" ? "active" : ""}`}
								data-title="About"
							>
								<FontAwesomeIcon icon={faUser} />
								<span>About</span>
							</Link>
							
							<Link 
								to="/projects" 
								className={`mobile-nav-item ${active === "projects" ? "active" : ""}`}
								data-title="Projects"
							>
								<FontAwesomeIcon icon={faCode} />
								<span>Projects</span>
							</Link>
							
							<Link 
								to="/achievements" 
								className={`mobile-nav-item ${active === "achievements" ? "active" : ""}`}
								data-title="Achievements"
							>
								<FontAwesomeIcon icon={faTrophy} />
								<span>Achievements</span>
							</Link>
							
							<Link 
								to="/contact" 
								className={`mobile-nav-item ${active === "contact" ? "active" : ""}`}
								data-title="Contact"
							>
								<FontAwesomeIcon icon={faEnvelope} />
								<span>Contact</span>
							</Link>
							
							<button 
								className="mobile-theme-toggle"
								onClick={themeToggle}
							>
								{theme === "light-theme" ? (
									<FontAwesomeIcon icon={faCloudMoon} />
								) : (
									<FontAwesomeIcon icon={faSun} />
								)}
							</button>
						</div>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
