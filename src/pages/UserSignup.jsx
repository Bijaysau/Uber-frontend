// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// function UserSignup() {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [userData, setUserData] = useState({});
//   const submitHandler = (e) => {
//     e.preventDefault();
//     setUserData({
//       username: {
//         firstName: firstName,
//         lastName: lastName,
//       },
//       email: email,
//       password: password,
//     });
//     console.log(userData);
//     setEmail("");
//     setPassword("");
//     setFirstName("");
//     setLastName("");
//     console.log("Login submitted", { email, password });
//     // Handle login logic here
//   };
//   return (
//     <div className="min-h-screen w-full flex flex-col items-center bg-white">
//       {/* ✅ Full-Width Header Without Gaps */}
//       <div className="bg-black w-full px-5 py-4">
//         <img
//           className="w-24"
//           src="https://www.texasrealsanta.com/wp-content/uploads/2024/10/uber-logo-white.png"
//           alt="Uber Logo"
//         />
//       </div>{" "}
//       <div className="w-full max-w-md px-6 mt-12">
//         <form
//           onSubmit={(e) => {
//             submitHandler(e);
//           }}
//         >
//           {/* ✅ Centered Login Form */}

//           <h3 className="text-2xl font-semibold mb-2 text-start">
//             What's your Fullname?
//           </h3>
//           <div className="flex gap-4 ">
//             <input
//               required
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="bg-gray-100 rounded-lg px-4 py-3 border w-1/2 mb-7 focus:outline-none focus:ring-2 focus:ring-black"
//               type="text"
//               placeholder="Frist name"
//             />

//             <input
//               required
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               className="bg-gray-100 rounded-lg px-4 py-3 border w-1/2 mb-7 focus:outline-none focus:ring-2 focus:ring-black"
//               type="text"
//               placeholder="Last name"
//             />
//           </div>

//           <h3 className="text-lg font-semibold mb-2 text-start">
//             What's your email?
//           </h3>
//           <input
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="bg-gray-100 rounded-lg px-4 py-3 border w-full  mb-5 focus:outline-none focus:ring-2 focus:ring-black"
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

//           {/* ✅ Buttons with No Gaps */}
//           <button className="bg-gray-200 text-black font-semibold rounded-lg py-3 w-full mb-3 text-lg shadow-md transition hover:bg-gray-300 hover:shadow-lg">
//             Signup
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

//         {/* ✅ Beautiful Captain Login */}
//         <Link
//           to={"/login"}
//           className="bg-black flex items-center justify-center text-white font-semibold rounded-lg py-3 w-full text-lg shadow-md transition  hover:bg-gray-900 hover:shadow-lg"
//         >
//           User Login
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default UserSignup;

import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserDataContext } from "../context/UserContext";

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [userData, setUserData] = useState({});
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  // Form submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      mobile: mobile,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/Home");
      }

      // Clear form fields after successful registration
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setMobile("");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white">
      <div className="bg-black text-white w-full px-5 py-4">
        <h1 className="text-2xl font-semibold">Uber</h1>
      </div>
      <div className="w-full max-w-md px-6 mt-12">
        <form onSubmit={submitHandler}>
          <h3 className="text-2xl font-semibold mb-2 text-start">
            What's your Fullname?
          </h3>
          <div className="flex gap-4">
            <input
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-gray-100 rounded-lg px-4 py-3 border w-1/2 mb-7 focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              placeholder="First name"
            />
            <input
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-gray-100 rounded-lg px-4 py-3 border w-1/2 mb-7 focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              placeholder="Last name"
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
            What's your mobile number?
          </h3>
          <input
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="bg-gray-100 rounded-lg px-4 py-3 border w-full mb-5 focus:outline-none focus:ring-2 focus:ring-black"
            type="tel"
            placeholder="Enter your mobile number"
          />

          <h3 className="text-lg font-medium mb-2 text-start">
            Enter Password
          </h3>
          <div className="relative mb-10">
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                // Hide tooltip if no input is provided
                if (password === "") setIsFocused(false);
              }}
              className="bg-gray-100 rounded-lg px-4 py-3 border w-full focus:outline-none focus:ring-2 focus:ring-black"
              type="password"
              placeholder="Enter Your Password"
            />

            {/* Show tooltip only when the input is focused and no text has been typed */}
            {isFocused && password === "" && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-green-300 text-green-800 text-sm rounded-xl px-4 py-2 shadow-lg transition-opacity duration-200 w-max max-w-xs">
                ✅ Use a valid password: combine name and numbers
                <br />
                e.g., <span className="font-semibold text-black">bijay123</span>
              </div>
            )}
          </div>

          <button className="bg-black text-white font-semibold rounded-lg py-3 w-full mb-3 text-lg shadow-md transition hover:bg-gray-900 hover:shadow-lg">
            Signup
          </button>
        </form>
      </div>

      <div className="w-full max-w-md px-6 mt-4">
        <div className="relative w-full flex items-center justify-center my-4 mb-10">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="absolute bg-white px-4 text-gray-500 text-sm">
            or
          </span>
        </div>
        <Link
          to={"/login"}
          className="bg-gray-200 text-black flex items-center justify-center font-semibold rounded-lg py-3 w-full text-lg shadow-md transition hover:bg-gray-300 hover:shadow-lg"
        >
          User Login
        </Link>
      </div>
    </div>
  );
}

export default UserSignup;
