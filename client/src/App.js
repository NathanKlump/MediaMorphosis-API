import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">MediaMorphosis API</h1>
        <p className="mb-4">
          Written in Rust and leveraging FFmpeg, the <strong>MediaMorphosis API</strong> offers high-performance media conversion capabilities. It effortlessly transforms audio, video, and images into various formats, ensuring both quality and speed.
        </p>
        <p className="mb-6">
          Ideal for developers needing a reliable and swift media converter, MediaMorphosis API simplifies the process of media file conversion without compromising on efficiency or performance.
        </p>

        {/* Form Section */}
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mediaFile">
              Media File
            </label>
            <input
              type="file"
              id="mediaFile"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              accept="audio/*,video/*,image/*"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="format">
              Desired Format
            </label>
            <input
              type="text"
              id="format"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="e.g., mp4, mp3, png"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
