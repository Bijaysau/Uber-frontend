import React from "react";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Uber</h1>
        <div>
          <Link
            to="/login"
            className="text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="ml-3 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?car,city')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl sm:text-5xl text-white font-bold z-10">
          Get a ride, or drive and earn
        </h1>
        <p className="text-lg text-white mt-3 z-10">
          Uber connects drivers and riders for seamless transportation.
        </p>
        <div className="mt-6 z-10">
          <Link
            to="/login"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Book a Ride
          </Link>
          <Link
            to="/captain-signup"
            className="ml-4 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Become a Driver
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
            <p className="text-gray-600">
              Get a ride within minutes and reach your destination quickly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">
              Competitive fares to make your journey cost-effective.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
            <p className="text-gray-600">
              Verified drivers and real-time tracking ensure your safety.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-gray-400">
          &copy; 2025 Uber Clone. All rights reserved.
        </p>
        <div className="mt-3">
          <a href="#" className="text-gray-400 hover:text-white mx-3">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-3">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-3">
            Help Center
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Section;
