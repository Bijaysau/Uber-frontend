// import React from "react";

// const UserLogin = () => {
//   return (
//     <div>
//       <div className="bg-black flex justify-between mb-10 pt-4 pb-8 min-h-16 items-center w-full h-16  ">
//         <img
//           className="w-20 sm:w-24 md:w-28 mt-5 ml-6"
//           src="https://www.texasrealsanta.com/wp-content/uploads/2024/10/uber-logo-white.png"
//           alt="Uber Logo"
//         />
//       </div>

//       <form>
//         <h3 className="text-xl">What's your email</h3>
//         <input
//           required
//           className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full placeholder:Enter your email address"
//           type="email"
//         />
//         <h3 className="text-lg font-medium mb-2">Enter Password</h3>
//         <input
//           required
//           className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg font-medium "
//           type="password"
//           placeholder="Enter Your Password"
//         />
//         <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full">
//           Login
//         </button>
//       </form>
//       <Link >Create new Account </Link>
//     </div>

//   );
// };

// export default UserLogin;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const UserLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/Home");
    }

    setEmail("");
    setPassword("");

    // Handle login logic here
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white">
      {/* ✅ Full-Width Header Without Gaps */}
      <div className="bg-black w-full px-5 py-4">
        <img
          className="w-24"
          src="https://www.texasrealsanta.com/wp-content/uploads/2024/10/uber-logo-white.png"
          alt="Uber Logo"
        />
      </div>{" "}
      <div className="w-full max-w-md px-6 mt-12">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          {/* ✅ Centered Login Form */}

          <h3 className="text-2xl font-semibold mb-4 text-center">
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

          <h3 className="text-lg font-medium mb-2 text-center">
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

          {/* ✅ Buttons with No Gaps */}
          <button className="bg-black text-white font-semibold rounded-lg py-3 w-full mb-3 text-lg shadow-md transition hover:bg-gray-900 hover:shadow-lg">
            Login
          </button>
        </form>
      </div>
      <div className="w-full max-w-md px-6 mt-4">
        <Link
          to="/signup"
          className="bg-gray-200 text-black font-semibold rounded-lg py-3 w-full mb-5 text-lg shadow-md transition hover:bg-gray-300 hover:shadow-lg text-center block"
        >
          Sign Up
        </Link>
        <div className="relative w-full flex items-center justify-center my-4 ">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="absolute bg-white px-4 text-gray-500 text-sm">
            or
          </span>
        </div>

        {/* ✅ Beautiful Captain Login */}
        <Link
          to={"/captain-login"}
          className="bg-yellow-400 flex items-center justify-center text-black font-semibold rounded-lg py-3 w-full text-lg shadow-md transition hover:bg-yellow-500 hover:shadow-lg"
        >
          Driver Login 🚗
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
