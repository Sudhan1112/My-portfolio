import { faCloudMoon, faSun, faHome, faUser, faCode, faTrophy, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light-theme"
	);

	const themeToggle = (e) => {
		const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
		const isDarkToLight = theme === "dark-theme";

		if (!document.startViewTransition) {
			setTheme(newTheme);
			return;
		}

		// 1. Calculate Animation Origin (Logo position - ALWAYS use logo!)
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;

		const logoElement = document.querySelector(".homepage-logo");
		if (logoElement) {
			const rect = logoElement.getBoundingClientRect();
			x = rect.left + rect.width / 2;
			y = rect.top + rect.height / 2;
		}

		// 2. Set Transition Type on Document
		document.documentElement.dataset.transition = isDarkToLight ? "implode" : "bloom";

		// 3. Start View Transition
		const transition = document.startViewTransition(() => {
			flushSync(() => {
				setTheme(newTheme);
			});
		});

		// 4. Run Animation based on Direction
		transition.ready.then(() => {
			// Calculate distance to furthest corner FROM THE LOGO
			const endRadius = Math.hypot(
				Math.max(x, window.innerWidth - x),
				Math.max(y, window.innerHeight - y)
			);

			if (isDarkToLight) {
				// DARK -> LIGHT (Implode/Shrink from edges to LOGO)
				// Goal: Dark theme (Old View) shrinks from full screen to LOGO position
				document.documentElement.animate(
					{
						clipPath: [
							`circle(${endRadius}px at ${x}px ${y}px)`, // Start: Full screen
							`circle(0px at ${x}px ${y}px)`,            // End: Zero at LOGO
						],
					},
					{
						duration: 800, // Same speed as bloom!
						easing: "ease-in-out", // Same easing as bloom!
						pseudoElement: "::view-transition-old(root)", // Animate the OLD view (Dark shrinking)
					}
				);
			} else {
				// LIGHT -> DARK (Bloom/Expand from LOGO)
				// Goal: Dark theme (New View) expands from LOGO to full screen
				document.documentElement.animate(
					{
						clipPath: [
							`circle(0px at ${x}px ${y}px)`,              // Start: Zero at LOGO
							`circle(${endRadius}px at ${x}px ${y}px)`,   // End: Full screen
						],
					},
					{
						duration: 800,
						easing: "ease-in-out",
						pseudoElement: "::view-transition-new(root)", // Animate the NEW view (Dark expanding)
					}
				);
			}
		});
	};

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
								onClick={(e) => themeToggle(e)}
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