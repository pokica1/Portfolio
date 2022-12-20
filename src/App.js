import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import SkillsPage from "./Pages/SkillsPage/SkillsPage";
import CVPage from "./Pages/CVPage/CVPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import "./App.css";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Layout>
						<Routes>
							<Route path="/" element={<HomePage />} exact />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/skills" element={<SkillsPage />} />
							<Route path="/CV" element={<CVPage />} />
							<Route path="/contact" element={<ContactPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</Layout>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
