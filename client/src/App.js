import React, { useState } from "react";
import { convertMedia } from "./api/API";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import Documentation from "./Documentation"; // Import your Documentation component

function App() {
  const [mediaFile, setMediaFile] = useState(null);
  const [format, setFormat] = useState("");
  const [isBarOneOpen, setIsBarOneOpen] = useState(false);
  const [isBarTwoOpen, setIsBarTwoOpen] = useState(false);
  const [isBarThreeOpen, setIsBarThreeOpen] = useState(false);

  const handleFileChange = (event) => {
    setMediaFile(event.target.files[0]);
  };

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  };

  const handleBarOneClick = () => {
    setIsBarOneOpen(!isBarOneOpen);
    setIsBarTwoOpen(false);
    setIsBarThreeOpen(false);
  };

  const handleBarTwoClick = () => {
    setIsBarTwoOpen(!isBarTwoOpen);
    setIsBarOneOpen(false);
    setIsBarThreeOpen(false);
  };

  const handleBarThreeClick = () => {
    setIsBarThreeOpen(!isBarThreeOpen);
    setIsBarOneOpen(false);
    setIsBarTwoOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await convertMedia(mediaFile, format);
      console.log(data);
      // Handle the response further (e.g., show a success message)
    } catch (error) {
      console.error("Error:", error);
      // Handle the error (e.g., show an error message)
    }
  };

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
          <div className="inset-x-0 top-2 z-10 left-2 right-2">
            <div className="flex justify-between items-center px-10 py-8 bg-lime-500 text-white shadow-lg rounded-xl border border-gray-800">
              <Link to="/" className="logo">
                <img
                  className="max-w-24 max-h-24 logo-img"
                  src="logo.png"
                  alt="MediaMorpher Logo"
                />
              </Link>
              {/* <h2 className="font-bold text-xl">MediaMorphosis1</h2> */}
              <ul className="flex items-center space-x-4">
                <li>
                  <Link
                    to="/Documentation"
                    className="text-gray-700 hover:text-white text-xl font-bold"
                  >
                    Documentation
                  </Link>
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

        {/* Routes */}
        <Routes>
          <Route exact path="/Documentation">
            {/* Your existing content */}
            {/* ... */}
          </Route>
          <Route path="/Documentation" element={Documentation} />
        </Routes>

        {/* Main section containing the hear/main content (like the FAQ and converter) */}
        <main className="relative">
          {/* The main content, the converter */}
          <section className="h-screen flex justify-center items-center flex-col">
            <div className="font-sans flex flex-col justify-center items-center mb-20">
              <h1 className="bg-gradient-to-b from-lime-400 opacity-100 to-white bg-clip-text text-5xl py-2 text-transparent font-bold lg:text-7xl text-center mb-4">
                Welcome to MediaMorphosis API!
              </h1>
              <div className="max-w-md mx-auto p-8 shadow-lg rounded-lg bg-slate-500">
                <h1 className="text-3xl text-lime-400 font-bold mb-4 ">
                  MediaMorphosis API
                </h1>
                <p className="mb-4 text-2xl text-white">
                  Written in Rust and leveraging FFmpeg, the{" "}
                  <strong>MediaMorphosis API</strong> offers high-performance
                  media conversion capabilities. It effortlessly transforms
                  audio, video, and images into various formats, ensuring both
                  quality and speed.
                </p>
                <p className="mb-10 text-2xl text-white">
                  Ideal for developers needing a reliable and swift media
                  converter, MediaMorphosis API simplifies the process of media
                  file conversion without compromising on efficiency or
                  performance.
                </p>
                {/* Form Section */}
                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-800 text-sm font-bold mb-2"
                      htmlFor="mediaFile"
                    >
                      Media File
                    </label>
                    <input
                      type="file"
                      id="mediaFile"
                      className="shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                      accept="audio/*,video/*,image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-900 text-sm font-bold mb-2"
                      htmlFor="format"
                    >
                      Desired Output File
                    </label>
                    <input
                      type="text"
                      id="format"
                      className="shadow border rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="e.g., output.mp4, example.mp3"
                      onChange={handleFormatChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gray-800 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Convert
                  </button>
                </form>
              </div>
            </div>

            {/* The FAQ */}
            <section className="w-full">
              <h1 className="bg-gradient-to-b from-lime-400 opacity-100 to-white bg-clip-text text-5xl py-2 text-transparent font-bold lg:text-5xl text-center">
                Why Choose MediaMorphosis?
              </h1>

              <div className="flex justify-between bg-gray-800 justify-top flex-col">
                <div className="text-white font-sans flex flex-col justify-center items-center">
                  <div className="flex justify-between w-full px-10 mt-4">
                    <div className="w-1/3">
                      <div
                        className="rounded-md bg-gray-900 hover:bg-neutral-600/80 flex flex-col justify-start p-2 m-2 ring-2 ring-neutral-600/60"
                        onClick={handleBarOneClick}
                      >
                        Supports Multiple Formats
                      </div>
                      {isBarOneOpen && (
                        <div className="bg-gray-800 text-white p-4 rounded-md">
                          Convert your videos to a wide range of popular
                          formats, including MP4, AVI, MKV, WMV, MOV, and FLV.
                        </div>
                      )}
                    </div>
                    <div className="w-1/3">
                      <div
                        className="rounded-md bg-gray-900 hover:bg-neutral-600/80 flex flex-col justify-start p-2 m-2 ring-2 ring-neutral-600/60"
                        onClick={handleBarTwoClick}
                      >
                        Fast and User-Friendly
                      </div>
                      {isBarTwoOpen && (
                        <div className="bg-gray-800 text-white p-4 rounded-md">
                          Our video converter is fast and easy to use. Simply
                          upload your video and select the desired format.
                        </div>
                      )}
                    </div>
                    <div className="w-1/3">
                      <div
                        className="rounded-md bg-gray-900 hover:bg-neutral-600/80 flex flex-col justify-start p-2 m-2 ring-2 ring-neutral-600/60"
                        onClick={handleBarThreeClick}
                      >
                        Security and Privacy
                      </div>
                      {isBarThreeOpen && (
                        <div className="bg-gray-800 text-white p-4 rounded-md">
                          Rest assured, your videos are kept secure and private.
                          We never share your videos with anyone else.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>

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

export default App;
