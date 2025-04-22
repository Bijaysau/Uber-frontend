import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
function CaptainLogin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = { email: email, password: password };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");

    // Handle login logic here
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white">
      {/* ✅ Full-Width Header Without Gaps */}
      <div className="bg-black text-white w-full px-5 py-4">
        <h1 className="text-2xl font-semibold">Uber</h1>
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
          <button className="bg-yellow-400 text-white font-semibold rounded-lg py-3 w-full mb-3 text-lg shadow-md transition hover:bg-yellow-500 hover:shadow-lg">
            Login
          </button>
        </form>
      </div>
      <div className="w-full max-w-md px-6 mt-4">
        <Link
          to="/captain-signup"
          className="bg-gray-200 text-black font-semibold rounded-lg py-3 w-full mb-5 text-lg shadow-md transition hover:bg-gray-300 hover:shadow-lg text-center block"
        >
          Rigister as a Driver
        </Link>
        <div className="relative w-full flex items-center justify-center my-4 ">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="absolute bg-white px-4 text-gray-500 text-sm">
            or
          </span>
        </div>

        {/* ✅ Beautiful Captain Login */}
        <Link
          to={"/login"}
          className="bg-black flex items-center justify-center text-white font-semibold rounded-lg py-3 w-full text-lg shadow-md transition  hover:bg-gray-900 hover:shadow-lg"
        >
          User Login <IoArrowBack />
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
