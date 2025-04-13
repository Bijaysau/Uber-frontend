// import React from "react";

// const Home = () => {
//   return (
//     <div>
//       <div className=" bg-cover bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5310f182519763.652f3606b64b0.jpg)] h-screen pt-14 flex justify-between flex-col w-full bg-red-400">
//         <img
//           className="w-20 ml-8"
//           src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
//           alt=""
//         />
//         <div className="bg-white pb-6 py-5 px-4">
//           <h2 className="text-3xl font-bold">Get Started with Uber</h2>
//           <Link className="w-full text-lg bg-black text-white py-3 rounded mt-5">
//             Continue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-cover bg-center bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5310f182519763.652f3606b64b0.jpg)]">
      {/* Logo */}
      <img
        className="w-20 sm:w-24 md:w-28 mt-5 ml-6"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      {/* Bottom Card Section */}
      <div className="bg-white pb-6 py-5 px-4">
        <h2 className="text-3xl font-bold">Get Started with Uber</h2>{" "}
        <Link
          to={"/section"}
          className=" flex items-center justify-center w-full text-lg bg-black text-white py-3 rounded mt-5"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
