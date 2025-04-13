// import React, { useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const CaptainLogout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const logoutUser = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         localStorage.removeItem("token");
//         navigate("/captain-login");
//       } catch (error) {
//         console.error("Logout failed:", error);
//       }
//     };

//     logoutUser();
//   }, [navigate]);

//   return <div>Logging out...</div>;
// };

// export default CaptainLogout;

// import React, { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { CaptainDataContext } from "../context/CaptainContext";
// import axios from "axios";

// function CaptainLogout() {
//   const navigate = useNavigate();
//   const { setCaptain } = useContext(CaptainDataContext);

//   useEffect(() => {
//     const logoutUser = async () => {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         console.warn("No token found. Redirecting to login.");
//         navigate("/captain-login");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_BASE_URL}/captains/logout`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (response.status === 200) {
//           console.log("Logout successful");
//         }
//       } catch (error) {
//         console.error("Logout failed:", error);
//       } finally {
//         // ✅ Always clean up token and user state
//         localStorage.removeItem("token");
//         setCaptain(null);
//         navigate("/captain-login");
//       }
//     };

//     logoutUser();
//   }, [navigate, setCaptain]);

//   return <div>Logging out...</div>;
// }

// export default CaptainLogout;

import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

function CaptainLogout() {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("token");

      // ✅ Step 1: Clear token and user state before making API call
      localStorage.removeItem("token");
      setCaptain(null);

      // ✅ Step 2: Check if token is missing, then skip API call
      if (!token) {
        console.warn("No token found. Redirecting to login.");
        navigate("/captain-login");
        return;
      }

      try {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("✅ Logout successful");
      } catch (error) {
        if (error.response?.status === 401) {
          console.warn("⚠️ Token is already invalid. Skipping API call.");
        } else {
          console.error("❌ Logout request failed:", error);
        }
      } finally {
        // ✅ Ensure final cleanup and redirection
        navigate("/captain-login");
      }
    };

    logoutUser();
  }, [navigate, setCaptain]);

  return <div>Logging out...</div>;
}

export default CaptainLogout;
