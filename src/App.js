import React, { useState, useEffect } from "react";

const images = [
  "/images/train-image.jpg",
  "/images/park-image.jpg",
  "/images/bag-image.jpg",
  "/images/boys-image.jpg",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
     
      <nav className="bg-gray-800 w-full shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Travel</h1>
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Destinations</li>
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
          <button className="md:hidden bg-blue-500 px-3 py-2 rounded">
            Menu
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-10">
        <div className="relative w-full h-[500px] overflow-hidden">
         
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="travel"
                className="w-full flex-shrink-0 h-[500px] object-cover"
              />
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-blue-500" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center mt-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            Explore The World 
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Discover amazing places, breathtaking views, and unforgettable
            adventures with Travel.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>
      </section>
      <section className="bg-gray-900 py-16 px-6">
  {/* Heading */}
  <h2 className="text-3xl font-bold text-white mb-10 text-center">
    Your Recent Searches
  </h2>

  
  <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {[
      { place: "Indore, India", date: "15 Oct, 2025" },
      { place: "Mumbai, India", date: "20 Nov, 2025" },
      { place: "Delhi, India", date: "5 Dec, 2025" },
      { place: "Bangalore, India", date: "10 Jan, 2026" },
    ].map((search, index) => (
      <div
        key={index}
        className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-blue-500/40 transition duration-300 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-400">{search.place}</h3>
        <p className="text-gray-300 text-sm mt-1">Date: {search.date}</p>
      </div>
    ))}
  </div>
</section>

      <section className="bg-gray-900 py-16 px-6">

  <h2 className="text-3xl font-bold text-center text-white mb-10">
    Travel deals under <span className="text-blue-400">₹ 16,591</span>
  </h2>

 
  <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {/* Card 1 */}
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/40 transition duration-300">
      <img
        src="/images/indore-image.jpg"
        alt="Indore"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-400">Indore, India</h3>
        <p className="text-gray-300">5 Nights / 6 Days</p>
        <p className="text-gray-400 text-sm">Starting 15 Oct, 2025</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/40 transition duration-300">
      <img
        src="/images/mumbai-image.jpg"
        alt="Mumbai"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-400">Mumbai, India</h3>
        <p className="text-gray-300">3 Nights / 4 Days</p>
        <p className="text-gray-400 text-sm">Starting 20 Nov, 2025</p>
      </div>
    </div>

   
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/40 transition duration-300">
      <img
        src="/images/delhi-image.jpg"
        alt="Delhi"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-400">Delhi, India</h3>
        <p className="text-gray-300">4 Nights / 5 Days</p>
        <p className="text-gray-400 text-sm">Starting 5 Dec, 2025</p>
      </div>
    </div>
  </div>
</section>
<section className="bg-gray-900 py-16 px-6">
  
  <h2 className="text-3xl font-bold text-center text-white mb-10">
    Travel Memories
  </h2>

  
  <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {[
      "/images/gallery1.jpg",
      "/images/gallery2.jpg",
      "/images/gallery3.jpg",
      "/images/gallery4.jpg",
      "/images/gallery5.jpg",
      "/images/gallery6.jpg",
      "/images/gallery7.jpg",
      "/images/gallery8.jpg",
    ].map((img, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-2xl cursor-pointer group"
      >
        <img
          src={img}
          alt={`Gallery ${index + 1}`}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
        />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
          {/* <p className="text-white font-semibold text-lg">View</p> */}
        </div>
      </div>
    ))}
  </div>
</section>
<footer className="bg-gray-800 text-gray-300 py-8 mt-16">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
   <div className="mb-4 md:mb-0">
      <h1 className="text-2xl font-bold text-blue-400">Travel</h1>
      <p className="text-gray-400 text-sm">Explore. Dream. Discover.</p>
    </div>

    
    <div className="flex space-x-6 mb-4 md:mb-0">
      <a href="#home" className="hover:text-blue-400 transition">Home</a>
      <a href="#deals" className="hover:text-blue-400 transition">Deals</a>
      <a href="#gallery" className="hover:text-blue-400 transition">Gallery</a>
      <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
    </div>
</div>
<p className="text-center text-gray-500 text-sm mt-6">
    &copy; 2025 Travel. All rights reserved.
  </p>
</footer>


    </div>
  );
}

export default App;
