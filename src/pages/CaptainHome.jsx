import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  DollarSign,
  CarFront,
  User2,
  Power,
  Phone,
  X,
  CheckCircle,
} from "lucide-react";

function CaptainHome() {
  const [online, setOnline] = useState(false);
  const [rideRequest, setRideRequest] = useState(null);

  const fakeRequest = {
    customer: "Aarav Sharma",
    pickup: "Connaught Place, Delhi",
    destination: "Indira Gandhi International Airport",
    phone: "+91 98765 43210",
    fare: "₹350",
  };

  const handleRequestClick = () => {
    setRideRequest(fakeRequest);
  };

  const clearRequest = () => {
    setRideRequest(null);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/captains/logout"); // This will load the UserLogout.jsx component
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Uber</h1>
        <button
          onClick={() => setOnline(!online)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            online
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {online ? "Go Offline" : "Go Online"}
        </button>

        <div className="relative group">
          <button
            onClick={handleLogout}
            className="font-bold py-2 px-4 rounded text-2xl"
          >
            <BiLogOut />
          </button>
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Logout
          </span>
        </div>
      </header>

      {/* Split screen */}
      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left Side: Captain Info */}
        <div className="lg:w-1/2 p-4 sm:p-6 space-y-5 bg-gray-50">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">Welcome, Captain</h2>
            <p className="text-gray-600 text-sm">
              You're currently {online ? "Online 🚗" : "Offline ⛔"}
            </p>
          </div>

          {/* Earnings */}
          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <DollarSign className="text-green-500" />
              <div>
                <p className="text-sm text-gray-500">Today's Earnings</p>
                <p className="text-xl font-bold">₹820.40</p>
              </div>
            </div>
            <span className="text-sm text-gray-400">5 trips</span>
          </div>

          {/* Driver Info */}
          <div className="bg-white p-4 rounded-xl shadow space-y-3">
            <div className="flex items-center space-x-2">
              <User2 className="text-gray-500" />
              <span className="font-semibold">Captain John Doe</span>
            </div>
            <div className="flex items-center space-x-2">
              <CarFront className="text-gray-500" />
              <span>Honda City - Black</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-gray-500" />
              <span>MH 12 AB 1234</span>
            </div>
            <div className="flex items-center space-x-2">
              <Power className="text-gray-500" />
              <span>
                Status:
                <span
                  className={`ml-2 font-semibold ${
                    online ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {online ? "Online" : "Offline"}
                </span>
              </span>
            </div>
          </div>

          {/* Request Button */}
          <button
            onClick={handleRequestClick}
            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            disabled={!online}
          >
            Simulate Ride Request
          </button>
        </div>

        {/* Right Side: Map + Ride Request */}
        <div className="lg:w-1/2 bg-gray-200 relative p-2">
          <div className="h-[300px] sm:h-full rounded-xl overflow-hidden shadow-md">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Ride Request Card */}
          {rideRequest && (
            <div className="absolute top-4 right-4 w-[90%] lg:w-[80%] bg-white rounded-xl shadow-lg p-4 space-y-2 z-10">
              <h3 className="text-lg font-semibold text-gray-800">
                New Ride Request
              </h3>
              <p className="text-sm">
                <strong>Customer:</strong> {rideRequest.customer}
              </p>
              <p className="text-sm">
                <strong>Pickup:</strong> {rideRequest.pickup}
              </p>
              <p className="text-sm">
                <strong>Drop:</strong> {rideRequest.destination}
              </p>
              <p className="text-sm">
                <strong>Fare:</strong> {rideRequest.fare}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-blue-500" />
                {rideRequest.phone}
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={clearRequest}
                  className="text-red-600 hover:underline flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Reject
                </button>
                <button
                  onClick={clearRequest}
                  className="text-green-600 hover:underline flex items-center gap-1"
                >
                  <CheckCircle className="w-4 h-4" />
                  Accept
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <footer className="bg-black text-white py-6 text-center text-sm">
        <p className="text-gray-400">
          &copy; 2025 Uber Clone. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Help Center
          </a>
        </div>
      </footer>
    </div>
  );
}

export default CaptainHome;
