// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { CaptainDataContext } from "../context/CaptainContext";
// import axios from "axios";
// function CaptainProtectWrapper({ children }) {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const { captain, setCaptain } = useContext(CaptainDataContext);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     if (!token) {
//       navigate("/captain-login");
//     }
//   }, [token, navigate]); // Depend on token and navigate to avoid unnecessary calls
//   axios
//     .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((response) => {
//       if (response.status === 200) {
//         setCaptain(response.data.captain);
//         setIsLoading(false);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       navigate("/captain-login");
//     });
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return token ? <>{children}</> : null; // Prevent rendering children if not authenticated
// }

// export default CaptainProtectWrapper;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

function CaptainProtectWrapper({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }

    // ✅ Move API call inside useEffect
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
        }
      })
      .catch((err) => {
        console.error("Auth Error:", err);
        localStorage.removeItem("token"); // Remove invalid token
        navigate("/captain-login");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [navigate, setCaptain, token]); // ✅ Correct dependencies

  if (isLoading) return <div>Loading...</div>;

  return token ? <>{children}</> : null;
}

export default CaptainProtectWrapper;
