import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

// Components
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">David's Portfolio</h1>
            <div className="flex space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg ${isActive ? "font-semibold underline" : "hover:underline"}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `text-lg ${isActive ? "font-semibold underline" : "hover:underline"}`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-lg ${isActive ? "font-semibold underline" : "hover:underline"}`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
