import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
const Homepage = lazy(() => import("./pages/homepage"));
const About = lazy(() => import("./pages/about"));
const Projects = lazy(() => import("./pages/projects"));
const Achievements = lazy(() => import("./pages/achievements"));
const Contact = lazy(() => import("./pages/contact"));
const Notfound = lazy(() => import("./pages/404"));

import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Suspense fallback={<div style={{ padding: 20 }}>Loading…</div>}>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/achievements" element={<Achievements />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Notfound />} />
					</Routes>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
