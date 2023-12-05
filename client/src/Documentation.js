import React, { useState } from "react";
import { convertMedia } from "./api/API";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Switch,
} from "react-router-dom";

function Documentation() {
  // Colors:
  // Lime Green -> #BEF264 --> Tailwind CSS Color lime-500
  // Dark blue -> #263238 --> Tailwind CSS Color slate-500
  // gray-800

  return (
    <Router>
      {/* // Entire body */}
      <body className="relative bg-gray-800">
        {/* Header first */}
        <header>
          <div className="absolute inset-x-0 top-2 z-10 left-2 right-2">
            <div className="flex justify-between items-center px-10 py-8 bg-lime-500 text-white shadow-lg rounded-xl border border-gray-800">
              <a href="/" className="logo">
                <img
                  className="max-w-16 max-h-16 logo-img"
                  src="logo.png"
                  alt="MediaMorpher Logo"
                />
              </a>
              {/* <h2 className="font-bold text-xl">MediaMorphosis1</h2> */}
              <ul className="flex items-center space-x-4">
                <li>
                  <a
                    href="Documentation.js"
                    className="text-gray-700 hover:text-white text-xl font-bold"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <button className="bg-gray-700 hover:bg-rose-700 px-3 py-2 rounded text-white font-bold">
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Main section containing the hear/main content (like the FAQ and converter) */}
        <main></main>

        {/* Just the footer */}
        <footer className="justify-end bottom-2 z-0 left-2 right-2 ">
          <div className="flex justify-between items-center px-10 py-8 bg-lime-500 text-white shadow-lg rounded-xl border">
            <p>
              &copy; 2023 Video Converter by: John Atalla, Dominick Kalaj,
              Nathaniel Klump
            </p>
          </div>
        </footer>
      </body>
    </Router>
  );
}

export default Documentation;
