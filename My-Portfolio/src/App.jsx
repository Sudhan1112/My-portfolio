import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
