import React from 'react';
import './index.css'; // Tailwind CSS import

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-3xl font-bold text-blue-600 mb-4 bg-slate-200 p-4 rounded">
        Hello Tailwind CSS in React!
      </h1>
      <p className="text-gray-700 text-center">
        Edit <code className="bg-gray-200 px-1 rounded">src/App.js</code> and save to reload.
      </p>
      {/* <a
        className="mt-4 text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </div>
  );
}

export default App;
