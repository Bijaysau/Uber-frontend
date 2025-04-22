// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function CaptainSignup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [vehicleColor, setVehicleColor] = useState("");
//   const [vehiclePlate, setVehiclePlate] = useState("");
//   const [vehicleCapacity, setVehicleCapacity] = useState(1);
//   const [vehicleType, setVehicleType] = useState("car");
//   const [captainData, setCaptainData] = useState({});

// const submitHandler = (e) => {
//   e.preventDefault();

//   const newCaptain = {
//     fullname: {
//       firstname: firstName,
//       lastname: lastName,
//     },
//     email: email,
//     password: password,
//     vehicle: {
//       color: vehicleColor,
//       plate: vehiclePlate,
//       capacity: Number(vehicleCapacity),
//       vehicleType: vehicleType,
//     },
//   };

//   setCaptainData(newCaptain);

//   // ✅ Log Data Before Clearing Fields
//   console.log("Captain Registered:", newCaptain);

//   // Clear form fields after submission
//   setEmail("");
//   setPassword("");
//   setFirstName("");
//   setLastName("");
//   setVehicleColor("");
//   setVehiclePlate("");
//   setVehicleCapacity(1);
//   setVehicleType("car");
// };

// useEffect(() => {
//   console.log("Updated Captain Data:", captainData);
// }, [captainData]);

//   return (
//     <div className="min-h-screen w-full flex flex-col items-center bg-white">
//       <div className="bg-black w-full px-5 py-4">
//         <img
//           className="w-24"
//           src="https://www.texasrealsanta.com/wp-content/uploads/2024/10/uber-logo-white.png"
//           alt="Uber Logo"
//         />
//       </div>
//       <div className="w-full max-w-md px-6 mt-12">
//         <form onSubmit={submitHandler}>
//           {/* ✅ Full Name Fields */}
//           <h3 className="text-2xl font-semibold mb-2 text-start">
//             What's your Full Name?
//           </h3>
//           <div className="flex gap-4">
//             <input
//               required
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="bg-gray-100 rounded-lg px-4 py-3 border w-1/2 mb-7 focus:outline-none focus:ring-2 focus:ring-black"
//               type="text"
//               placeholder="First Name"
//             />
//             <input
//               required
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               className="bg-gray-100 rounded-lg px-4 py-3 border w-1/2 mb-7 focus:outline-none focus:ring-2 focus:ring-black"
//               type="text"
//               placeholder="Last Name"
//             />
//           </div>

//           {/* ✅ Email & Password Fields */}
//           <h3 className="text-lg font-semibold mb-2 text-start">
//             What's your email?
//           </h3>
//           <input
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-5 focus:outline-none focus:ring-2 focus:ring-black"
//             type="email"
//             placeholder="Enter your email address"
//           />

//           <h3 className="text-lg font-medium mb-2 text-start">
//             Enter Password
//           </h3>
//           <input
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-5 focus:outline-none focus:ring-2 focus:ring-black"
//             type="password"
//             placeholder="Enter Your Password"
//           />

//           {/* ✅ Vehicle Information */}
//           <h3 className="text-lg font-semibold mb-2 text-start">
//             Vehicle Details
//           </h3>
//           <input
//             required
//             value={vehicleColor}
//             onChange={(e) => setVehicleColor(e.target.value)}
//             className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-4 focus:outline-none focus:ring-2 focus:ring-black"
//             type="text"
//             placeholder="Vehicle Color"
//           />

//           <input
//             required
//             value={vehiclePlate}
//             onChange={(e) => setVehiclePlate(e.target.value)}
//             className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-4 focus:outline-none focus:ring-2 focus:ring-black"
//             type="text"
//             placeholder="License Plate Number"
//           />

//           <input
//             required
//             value={vehicleCapacity}
//             onChange={(e) => setVehicleCapacity(e.target.value)}
//             className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-4 focus:outline-none focus:ring-2 focus:ring-black"
//             type="number"
//             placeholder="Seating Capacity"
//             min="1"
//           />

//           <select
//             required
//             value={vehicleType}
//             onChange={(e) => setVehicleType(e.target.value)}
//             className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-5 focus:outline-none focus:ring-2 focus:ring-black"
//           >
//             <option value="car">Car</option>
//             <option value="auto">Auto Rickshaw</option>
//             <option value="motorcycle">Motorcycle</option>
//           </select>

//           {/* ✅ Signup Button */}
//           <button className="bg-gray-200 text-black font-semibold rounded-lg py-3 w-full mb-3 text-lg shadow-md transition hover:bg-gray-300 hover:shadow-lg">
//             Signup as Captain
//           </button>
//         </form>
//       </div>

//       <div className="w-full max-w-md px-6 mt-4">
//         <div className="relative w-full flex items-center justify-center my-4 mb-10">
//           <div className="w-full h-px bg-gray-300"></div>
//           <span className="absolute bg-white px-4 text-gray-500 text-sm">
//             or
//           </span>
//         </div>

//         {/* ✅ Redirect to Captain Login */}
//         <Link
//           to={"/captain-login"}
//           className="bg-black flex items-center justify-center text-white font-semibold rounded-lg py-3 w-full text-lg shadow-md transition hover:bg-gray-900 hover:shadow-lg"
//         >
//           Captain Login
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default CaptainSignup;

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState(1);
  const [vehicleType, setVehicleType] = useState("car");
  const [captainData, setCaptainData] = useState({});

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  // 🚀 Auto-update capacity based on vehicle type
  useEffect(() => {
    if (vehicleType === "motorcycle") {
      setVehicleCapacity(1);
    } else if (vehicleType === "auto") {
      setVehicleCapacity(4);
    } else if (vehicleType === "car") {
      setVehicleCapacity(1); // Default to 1 for cars
    }
  }, [vehicleType]);

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   const newCaptain = {
  //     fullname: {
  //       firstname: firstname,
  //       lastname: lastname,
  //     },
  //     email: email,
  //     password: password,
  //     vehicle: {
  //       color: vehicleColor,
  //       plate: vehiclePlate,
  //       capacity: Number(vehicleCapacity),
  //       vehicleType: vehicleType,
  //     },
  //   };

  //   // setCaptainData(newCaptain);

  //   // ✅ Log Data Before Clearing Fields
  //   const response = await axios.post(
  //     `${import.meta.env.VITE_BASE_URL}/captains/register`,
  //     newCaptain
  //   );
  //   // Clear form fields after submission

  //   if (response.status === 201) {
  //     const data = response.data;
  //     setCaptain(data.captain);
  //     localStorage.setItem("token", data.token);
  //     navigate("/captain-home");
  //   }

  //   setEmail("");
  //   setPassword("");
  //   setFirstName("");
  //   setLastName("");
  //   setVehicleColor("");
  //   setVehiclePlate("");
  //   setVehicleCapacity(1);
  //   setVehicleType("car");
  // };

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCaptain = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      mobile: mobile,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: Number(vehicleCapacity),
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        newCaptain
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert(
        error.response?.data?.message || "Signup failed. Check the inputs."
      );
    }
  };

  // useEffect(() => {
  //   console.log("Updated Captain Data:", captainData);
  // }, [captainData]);
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white">
      <div className="bg-black text-white w-full px-5 py-4">
        <h1 className="text-2xl font-semibold">Uber</h1>
      </div>
      <div className="w-full max-w-md px-6 mt-12">
        <form onSubmit={submitHandler}>
          <h3 className="text-2xl font-semibold mb-2 text-start">
            What's your Full Name?
          </h3>
          <div className="flex gap-4">
            <input
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-gray-100 rounded-lg px-4 py-3 border w-1/2 mb-7 focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-gray-100 rounded-lg px-4 py-3 border w-1/2 mb-7 focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-lg font-semibold mb-2 text-start">
            What's your email?
          </h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-5 focus:outline-none focus:ring-2 focus:ring-black"
            type="email"
            placeholder="Enter your email address"
          />
          <h3 className="text-lg font-semibold mb-2 text-start">
            What's your Mobile-No?
          </h3>
          <input
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-5 focus:outline-none focus:ring-2 focus:ring-black"
            type="tel"
            placeholder="Enter your Mobile Number"
          />
          <h3 className="text-lg font-medium mb-2 text-start">
            Enter Password
          </h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-5 focus:outline-none focus:ring-2 focus:ring-black"
            type="password"
            placeholder="Enter Your Password"
          />

          <h3 className="text-lg font-semibold mb-2 text-start">
            Vehicle Details
          </h3>
          <input
            required
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            type="text"
            placeholder="Vehicle Color"
          />

          <input
            required
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            type="text"
            placeholder="License Plate Number"
          />

          <select
            required
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="car">Car</option>
            <option value="auto">Auto Rickshaw</option>
            <option value="motorcycle">Motorcycle</option>
          </select>

          <input
            required
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-5 focus:outline-none focus:ring-2 focus:ring-black"
            type="number"
            placeholder="Seating Capacity"
            min="1"
            max={vehicleType === "car" ? 7 : vehicleCapacity} // Limit car capacity to 7
            disabled={vehicleType !== "car"} // Disable editing for auto/motorcycle
          />

          <button className="bg-black text-white font-semibold rounded-lg py-3 w-full  text-lg shadow-md transition hover:bg-gray-900 hover:shadow-lg">
            Create as a Driver
          </button>
        </form>
      </div>

      <div className="w-full max-w-md px-6 mt-4">
        <div className="relative w-full flex items-center justify-center my-4 mb-5">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="absolute bg-white px-4 text-gray-500 text-sm">
            or
          </span>
        </div>

        <Link
          to={"/captain-login"}
          className="bg-gray-200 flex items-center justify-center text-black font-semibold rounded-lg py-3 w-full text-lg shadow-md transition hover:bg-gray-300 hover:shadow-lg"
        >
          Driver Login
        </Link>
      </div>
    </div>
  );
}

export default CaptainSignup;
