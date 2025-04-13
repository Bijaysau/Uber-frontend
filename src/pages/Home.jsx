// import React, { useState } from "react";
// import LocationSearchPanel from "../components/LocationSearchPanel";
// import { IoCar } from "react-icons/io5";
// function Home() {
//   const [pickup, setPickup] = useState("");
//   const [destination, setDestination] = useState("");

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <h1 className="text-2xl font-semibold">Uber</h1>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row justify-center items-center px-8 py-12 md:space-x-4 lg:space-x-6 w-full h-full">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-center md:items-center">
//           <h2 className="text-5xl font-bold mb-6 text-center md:text-right">
//             Go anywhere with Uber
//           </h2>

//           <div className="flex space-x-4 mb-6">
//             {" "}
//             <button className="flex items-center space-x-2 font-semibold text-lg border-b-2 border-black pb-1">
//               <i className="ri-car-line"></i>
//               <IoCar />
//               <span>Ride</span>{" "}
//             </button>{" "}
//           </div>

//           {/* Input Fields */}

//           <form className="w-full max-w-md">
//             <div className="relative mb-3">
//               <span className="absolute left-4 top-3 text-gray-500">●</span>
//               <LocationSearchPanel
//                 placeholder={`⚫                Pickup location`}
//                 value={pickup}
//                 onChange={setPickup}
//               />
//             </div>

//             <div className="relative mb-3">
//               <LocationSearchPanel
//                 placeholder={"⬛                Dropoff location"}
//                 value={destination}
//                 onChange={setDestination}
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex items-center space-x-6">
//               <button className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-md mb-5">
//                 See prices
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Right Section: Map Placeholder */}
//         <div className="w-full md:w-[40%] h-[600px] rounded-lg flex items-center justify-center overflow-hidden">
//           <p className="text-gray-600 text-xl">
//             <img
//               className="h-full w-full object-cover "
//               src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
//               alt=""
//             />
//           </p>
//         </div>
//       </div>

//       <footer className="bg-black text-white py-8 text-center">
//         <p className="text-gray-400">
//           &copy; 2025 Uber Clone. All rights reserved.
//         </p>
//         <div className="mt-3">
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Privacy Policy
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Terms of Service
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Help Center
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;

// import React, { useState } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";
// import "remixicon/fonts/remixicon.css";
// import LocationSeacrhPanel from "../components/LocationSEarchPanel";
// function Home() {
//   const [pickup, setpPckup] = useState("");
//   const [destination, setDestination] = useState("");
//   const [panelOpen, setPanelOpen] = useState(false);
//   const panelRef = useRef(null);
//   const panelClose = useRef(null);
//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   useGSAP(() => {
//     if (panelOpen) {
//       gsap.to(panelRef.current, {
//         height: "70%",
//         padding: 24,
//       });
//       gsap.to(panelClose.current, {
//         opacity: 1,
//       });
//     } else {
//       gsap.to(panelRef.current, {
//         height: "0%",
//         padding: 24,
//       });
//       gsap.to(panelClose.current, {
//         opacity: 0,
//       });
//     }
//   }, [panelOpen]);

//   return (
//     <div className="h-screen relative">
//       <header className="bg-black px-6 py-4 flex justify-between items-center">
//         <img
//           className="w-24"
//           src="https://www.texasrealsanta.com/wp-content/uploads/2024/10/uber-logo-white.png"
//           alt="Uber Logo"
//         />
//       </header>

//       <div className="h-screen w-screen">
//         {/* image for temporary use */}
//         <img
//           className="h-full w-full object-cover "
//           src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
//           alt=""
//         />
//       </div>
//       <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
//         <div className="h-[30%] p-6 relative bg-white">
//           <h5
//             ref={panelClose}
//             onClick={() => {
//               setPanelOpen(false);
//             }}
//             className=" absolute opacity-0 top-6 right-6 text-2xl"
//           >
//             <i className="ri-arrow-down-wide-line"></i>
//           </h5>

//           <h4 className="text-3xl font-semibold">Find a Trip</h4>
//           <form
//             onSubmit={(e) => {
//               submitHandler(e);
//             }}
//           >
//             <div className="line absolute h-16 w-1 top-[35%] left-10 bg-gray-900 rounded-full "></div>
//             <input
//               onClick={() => setPanelOpen(true)}
//               value={pickup}
//               onChange={(e) => setpPckup(e.target.value)}
//               className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mb-3"
//               type="text"
//               placeholder="Add a pickup location"
//             />
//             <input
//               onClick={() => setPanelOpen(true)}
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//               className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mb-3"
//               type="text"
//               placeholder="Enter Your destination"
//             />
//           </form>
//         </div>
//         <div ref={panelRef} className="h-0 bg-white ">
//           <LocationSeacrhPanel />
//         </div>
//       </div>

//       <footer className="bg-black text-white py-8 text-center">
//         <p className="text-gray-400">
//           &copy; 2025 Uber Clone. All rights reserved.
//         </p>
//         <div className="mt-3">
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Privacy Policy
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Terms of Service
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Help Center
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import "remixicon/fonts/remixicon.css";
// import LocationSearchPanel from "../components/LocationSearchPanel";
// import { IoCar } from "react-icons/io5";

// function Home() {
//   const [pickup, setPickup] = useState("");
//   const [destination, setDestination] = useState("");
//   const [panelOpen, setPanelOpen] = useState(false);
//   const panelRef = useRef(null);
//   const panelClose = useRef(null);

//   useGSAP(() => {
//     if (panelOpen) {
//       gsap.to(panelRef.current, { height: "70%", padding: 24 });
//       gsap.to(panelClose.current, { opacity: 1 });
//     } else {
//       gsap.to(panelRef.current, { height: "0%", padding: 0 });
//       gsap.to(panelClose.current, { opacity: 0 });
//     }
//   }, [panelOpen]);

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
//         <h1 className="text-2xl font-semibold">Uber</h1>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row justify-center items-center px-8 py-12 w-full h-full">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-center">
//           <h2 className="text-5xl font-bold mb-6 text-center">
//             Go anywhere with Uber
//           </h2>
//           <div className="flex space-x-4 mb-6">
//             <button className="flex items-center space-x-2 font-semibold text-lg border-b-2 border-black pb-1">
//               <IoCar />
//               <span>Ride</span>
//             </button>
//           </div>

//           {/* Input Fields */}
//           <form className="w-full max-w-md">
//             <div className="relative mb-3">
//               <span className="absolute left-4 top-3 text-gray-700">●</span>
//               <input
//                 onClick={() => setPanelOpen(true)}
//                 value={pickup}
//                 onChange={(e) => setPickup(e.target.value)}
//                 className="bg-gray-100 px-12 py-2 text-lg rounded-lg w-full mb-3"
//                 type="text"
//                 placeholder="Pickup location"
//               />
//             </div>

//             <div className="relative mb-3">
//               <span className="absolute left-4 top-3 text-gray-700">■</span>
//               <input
//                 onClick={() => setPanelOpen(true)}
//                 value={destination}
//                 onChange={(e) => setDestination(e.target.value)}
//                 className="bg-gray-100 px-12 py-2 text-lg rounded-lg w-full mb-3"
//                 type="text"
//                 placeholder="Dropoff location"
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex items-center space-x-6">
//               <button className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-md mb-5">
//                 See prices
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Right Section: Map Placeholder */}
//         <div className="w-full md:w-[40%] h-[600px] rounded-lg flex items-center justify-center overflow-hidden">
//           <img
//             className="h-full w-full object-cover"
//             src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
//             alt="Map Placeholder"
//           />
//         </div>
//       </div>

//       {/* <div
//         ref={panelRef}
//         className="bg-white max-h-96  overflow-hidden fixed bottom-56 right-[37%] w-[20%] shadow-lg transition-all"
//       >
//         <LocationSearchPanel />

//       </div> */}

//       <div
//         ref={panelRef}
//         className="bg-white max-h-96 mb-3  overflow-hidden fixed bottom-40 md:bottom-32 lg:bottom-28 left-1/2 transform -translate-x-1/2 w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%] xl:w-[25%] shadow-xl transition-all rounded-lg "
//       >
//         <LocationSearchPanel />
//       </div>
//       <div className="fixed w-full z-10 bottom-0 p-5 bg-white">
//         <div className="flex w-full items-center justify-between ">
//           <img
//             className="h-20"
//             src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png"
//             alt=""
//           />
//           <div className="w-1/2">
//             <h4 className="font-medium text-sm">
//               UberX{" "}
//               <span>
//                 <i className="ri-user-fill">4</i>
//               </span>
//             </h4>
//             <h5 className="font-medium text-sm">2 mins away</h5>
//             <p className="font-normal text-xs text-gray-600">
//               Affordable, compact rides
//             </p>
//           </div>
//           <h2 className="text-2xl font-semibold">₹193.20</h2>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-black text-white py-8 text-center">
//         <p className="text-gray-400">
//           &copy; 2025 Uber Clone. All rights reserved.
//         </p>
//         <div className="mt-3">
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Privacy Policy
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Terms of Service
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Help Center
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;

// import React, { useState } from "react";
// import LocationSearchPanel from "../components/LocationSearchPanel";

// function Home() {
//   const [pickup, setPickup] = useState("");
//   const [destination, setDestination] = useState("");
//   const [pickupPanelOpen, setPickupPanelOpen] = useState(false);
//   const [destinationPanelOpen, setDestinationPanelOpen] = useState(false);

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <h1 className="text-2xl font-semibold">Uber</h1>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row justify-center items-center px-8 py-12 md:space-x-4 lg:space-x-6 w-full h-full">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-center md:items-center">
//           <h2 className="text-5xl font-bold mb-6 text-center md:text-right">
//             Go anywhere with Uber
//           </h2>

//           <div className="flex space-x-4 mb-6">
//             <button className="flex items-center space-x-2 font-semibold text-lg border-b-2 border-black pb-1">
//               <i className="ri-car-line"></i>
//               <span>Ride</span>
//             </button>
//           </div>

//           {/* Input Fields */}
//           <form className="w-full max-w-md">
//             {/* Pickup Location */}
//             <div className="relative mb-3">
//               <LocationSearchPanel
//                 value={pickup}
//                 onChange={setPickup}
//                 onClick={() => setPickupPanelOpen(true)}
//               />
//             </div>

//             {/* Dropoff Location */}
//             <div className="relative mb-3">
//               <LocationSearchPanel
//                 value={destination}
//                 onChange={setDestination}
//                 onClick={() => setDestinationPanelOpen(true)}
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex items-center space-x-6">
//               <button className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-md mb-5">
//                 See prices
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Right Section: Map Placeholder */}
//         <div className="w-full md:w-[40%] h-[600px] rounded-lg flex items-center justify-center overflow-hidden">
//           <p className="text-gray-600 text-xl">
//             <img
//               className="h-full w-full object-cover "
//               src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
//               alt=""
//             />
//           </p>
//         </div>
//       </div>

//       <footer className="bg-black text-white py-8 text-center">
//         <p className="text-gray-400">
//           &copy; 2025 Uber Clone. All rights reserved.
//         </p>
//         <div className="mt-3">
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Privacy Policy
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Terms of Service
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white mx-3">
//             Help Center
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;

// import React, { useState } from "react";
// import LocationSearchPanel from "../components/LocationSearchPanel";
// import { IoCar } from "react-icons/io5";

// function Home() {
//   const [pickup, setPickup] = useState("");
//   const [destination, setDestination] = useState("");
//   const [showOptions, setShowOptions] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col overflow-hidden">
//       {/* Header */}
//       <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <h1 className="text-2xl font-semibold">Uber</h1>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex flex-col lg:flex-row w-full flex-1 p-6 gap-8">
//         {/* Left Panel */}
//         <div className="w-full lg:w-1/2 flex flex-col">
//           <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center lg:text-left">
//             Go anywhere with Uber
//           </h2>

//           {/* Ride Type Selector (future use) */}
//           <div className="flex space-x-4 mb-6">
//             {" "}
//             <button className="flex items-center space-x-2 font-semibold text-lg border-b-2 border-black pb-1">
//               <i className="ri-car-line"></i>
//               <IoCar />
//               <span>Ride</span>{" "}
//             </button>{" "}
//           </div>

//           {/* Form */}
//           <form className="w-full space-y-4 max-w-md">
//             <LocationSearchPanel
//               value={pickup}
//               onChange={setPickup}
//               placeholder="Pickup location"
//             />
//             <LocationSearchPanel
//               value={destination}
//               onChange={setDestination}
//               placeholder="Destination"
//             />

//             <button
//               type="button"
//               onClick={() => setShowOptions(true)}
//               className="w-full bg-black text-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-gray-800 transition"
//             >
//               See prices
//             </button>
//           </form>

//           {/* Ride Options */}
//           {showOptions && (
//             <div className="bg-white shadow-md rounded-lg mt-6 p-4 space-y-6">
//               {/* Uber Types */}
//               {[
//                 {
//                   title: "UberX",
//                   desc: "Affordable, everyday rides",
//                   price: "$12.50",
//                   img: "https://img.icons8.com/ios-filled/50/000000/car--v1.png",
//                 },
//                 {
//                   title: "UberMoto",
//                   desc: "Quick rides on two wheels",
//                   price: "$5.00",
//                   img: "https://img.icons8.com/ios-filled/50/000000/motorcycle.png",
//                 },
//                 {
//                   title: "UberAuto",
//                   desc: "Budget-friendly auto rides",
//                   price: "$7.00",
//                   img: "https://img.icons8.com/ios-filled/50/000000/auto-rickshaw.png",
//                 },
//               ].map((option, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-between border-b pb-3"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <img
//                       src={option.img}
//                       className="w-10 h-10"
//                       alt={option.title}
//                     />
//                     <div>
//                       <h3 className="font-semibold text-lg">{option.title}</h3>
//                       <p className="text-gray-500 text-sm">{option.desc}</p>
//                     </div>
//                   </div>
//                   <span className="font-bold text-gray-700">
//                     {option.price}
//                   </span>
//                 </div>
//               ))}

//               {/* Payment + Confirm */}
//               <div className="space-y-4 pt-2">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Payment Method
//                   </label>
//                   <select
//                     className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
//                     defaultValue="upi"
//                   >
//                     <option value="upi">💳 UPI / Credit / Debit</option>
//                     <option value="cash">💵 Cash</option>
//                   </select>
//                 </div>

//                 <button
//                   type="button"
//                   className="w-full bg-black text-white px-6 py-3 text-sm font-semibold rounded-md hover:bg-gray-800 transition"
//                 >
//                   Request Uber
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Right Panel: Map */}
//         <div className="w-full lg:w-1/2 h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-md">
//           <img
//             src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
//             alt="Map Placeholder"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-black text-white py-6 text-center text-sm">
//         <p className="text-gray-400">
//           &copy; 2025 Uber Clone. All rights reserved.
//         </p>
//         <div className="mt-2 flex justify-center space-x-4">
//           <a href="#" className="text-gray-400 hover:text-white">
//             Privacy Policy
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white">
//             Terms of Service
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white">
//             Help Center
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import LocationSearchPanel from "../components/LocationSearchPanel";
import { IoCar } from "react-icons/io5";
import MapView from "../components/MapView";
import RideOptions from "../components/RideOptions";
import PaymentForm from "../components/PaymentForm";
import { calculateDistanceKm } from "../utils/distance";
import { toast } from "react-hot-toast";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showDriver, setShowDriver] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [paymentDone, setPaymentDone] = useState(false);
  const [price, setPrice] = useState(0);
  const [distanceKm, setDistanceKm] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Uber</h1>
      </header>

      {/* Main */}
      <main className="flex flex-col lg:flex-row w-full flex-1 p-6 gap-8">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center lg:text-left">
            Go anywhere with Uber
          </h2>

          {/* Ride Type */}
          <div className="flex space-x-4 mb-6">
            <button className="flex items-center space-x-2 font-semibold text-lg border-b-2 border-black pb-1">
              <IoCar />
              <span>Ride</span>
            </button>
          </div>

          {/* Form */}
          <form className="w-full space-y-4 max-w-md">
            <LocationSearchPanel
              value={pickup}
              onSelect={setPickup}
              placeholder="Pickup location"
            />
            <LocationSearchPanel
              value={destination}
              onSelect={setDestination}
              placeholder="Destination"
            />

            <button
              type="button"
              onClick={() => {
                if (!pickup || !destination) {
                  toast.error(
                    "Please enter your Pickup and Destination to continue"
                  );
                  return;
                }

                const distance = calculateDistanceKm(pickup, destination);
                const ratePerKm = 10;
                const minFare = 50;
                const total = Math.max(minFare, distance * ratePerKm);

                setDistanceKm(distance.toFixed(2));
                setPrice(Math.round(total)); // Stripe needs integer amount
                setShowOptions(true);
              }}
              className="w-full bg-black text-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-gray-800 transition"
            >
              See prices
            </button>
          </form>

          {/* Ride Options */}
          {showOptions && (
            <div className="bg-white shadow-md rounded-lg mt-6 p-4 space-y-6">
              {/* Options */}
              <RideOptions
                distanceKm={distanceKm}
                onSelect={(ride) => {
                  console.log("Selected ride:", ride);
                }}
              />

              {/* Payment & Confirm */}
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="upi">💳 UPI / Credit / Debit</option>
                    <option value="cash">💵 Cash</option>
                  </select>
                </div>

                {/* Conditional Payment Form */}
                {paymentMethod === "upi" && !paymentDone && (
                  <PaymentForm
                    amount={price}
                    onSuccess={() => {
                      setPaymentDone(true);
                      setShowDriver(true);
                    }}
                  />
                )}

                {/* Cash Button */}
                {paymentMethod === "cash" && (
                  <button
                    type="button"
                    onClick={() => setShowDriver(true)}
                    className="w-full bg-black text-white px-6 py-3 text-sm font-semibold rounded-md hover:bg-gray-800 transition"
                  >
                    Request Uber
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 👨‍✈️ Driver Info Section */}
          {showDriver && (
            <div className="mt-6 animate-fade-in-up transition-all duration-500 ease-out">
              <div className="bg-white shadow-xl rounded-2xl p-6 flex items-center space-x-6 border border-gray-200">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Driver"
                  className="w-20 h-20 rounded-full border-4 border-black"
                />

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                    Ramesh Kumar
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    ⭐ 4.9 • 500+ rides
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                    <div>
                      <span className="font-semibold">Vehicle:</span> White
                      Honda City
                    </div>
                    <div>
                      <span className="font-semibold">Number:</span> MH 12 AB
                      1234
                    </div>
                    <div>
                      <span className="font-semibold">Phone:</span> +91 98765
                      43210
                    </div>
                    <div>
                      <span className="font-semibold">Color:</span> White
                    </div>
                  </div>
                </div>

                <img
                  src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-car-cars-flatart-icons-outline-flatarticons-6.png"
                  alt="Car"
                  className="w-14 h-14"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Panel: Map */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-md">
          <MapView pickup={pickup} destination={destination} />
        </div>
      </main>

      {/* Footer */}
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

export default Home;
