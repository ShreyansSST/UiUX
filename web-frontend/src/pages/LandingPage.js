// import React from "react";
// import { Link } from "react-router-dom";
// import PrimaryButton from "../components/common/PrimaryButton";

// const LandingPage = () => {
//   return (
//     <div className="bg-container bg-[url('./assets/images/bluebg.jpg')]  bg-no-repeat h-[100vh] flex justify-center sm:bg-right sm:h-auto sm:min-h-[100vh]">
//       <div className="w-full flex flex-col items-center sm:flex-row-reverse">
//         <div className="absolute min-h-[40vh] flex flex-col gap-6 justify-center bottom-0 bg-white dark:bg-black z-20 text-black py-8 px-6 sm:static sm:w-[50%] sm:gap-8 sm:bg-[transparent] sm:dark:bg-[transparent]  md:px-[5%]">
//           <div className="flex flex-col gap-2">
//             <h2 className="text-[36px] font-bold leading-[46px] dark:text-white">
//               Play more, spend less with Game X change.
//             </h2>

//             <p className="dark:text-white">
//                lote ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//             </p>
//           </div>

//           <div className="flex flex-col gap-4">
//             <Link to="/signin">
//               <PrimaryButton btnLabel="Get Started" />
//             </Link>

//             <Link to="/signup">
//               <button className="font-semibold py-2 px-5 sm:px-8 w-full dark:text-white">
//                 Create new account
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


// import React from "react";
// import { Link } from "react-router-dom";
// import BlueBackground from "../assets/images/landing2.jpg"; // Import the background image
// import Logo from "../assets/images/Landing.png"; // Import the logo image

// import PrimaryButton from "../components/common/PrimaryButton";

// const LandingPage = () => {
//   return (
//     <div className="bg-container bg-no-repeat bg-cover bg-center h-[100vh] flex flex-col justify-center items-center sm:bg-right sm:h-auto sm:min-h-[100vh] relative">
//       {/* Use inline style for background image */}
//       <div
//         className="w-full flex flex-col items-center sm:flex-row-reverse"
//         style={{
//           backgroundImage: `url(${BlueBackground})`,
//         }}
//       >
//         {/* Add logo to the top left */}
//         <img
//           src={Logo}
//           alt="Logo"
//           className="absolute justify-center top-7 left-4 w-[100px] h-[100px] sm:w-[300px]"
//         />

//         <div className="absolute min-h-[40vh] flex flex-col gap-6 justify-center bottom-0 bg-white dark:bg-black z-20 text-black py-8 px-6 sm:static sm:w-[50%] sm:gap-8 sm:bg-[transparent] sm:dark:bg-[transparent]  md:px-[5%]">
//           <div className="flex flex-col gap-2">
//             <h2 className="text-[36px] font-bold leading-[46px] dark:text-white">
//               Read more, spend less with Book Swap.
//             </h2>

//             <p className="dark:text-white">
//                Get Your Books Today .
//             </p>
//           </div>

//           <div className="flex flex-col gap-4">
//             <Link to="/signin">
//               <PrimaryButton btnLabel="Get Started" />
//             </Link>

//             <Link to="/signup">
//               <button className="font-semibold py-2 px-5 sm:px-8 w-full dark:text-white">
//                 Create new account
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from "react";
import { Link } from "react-router-dom";
import BlueBackground from "../assets/images/landing2.jpg"; // Import the background image
import Logo from "../assets/images/Landing.png"; // Import the logo image

import PrimaryButton from "../components/common/PrimaryButton";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background section */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: `url(${BlueBackground})`,
        }}
      ></div>

      {/* Overlay for content */}
      <div className="relative w-full flex flex-col justify-between items-center z-8 flex-grow">
        {/* Header section */}
        <header className="w-full flex justify-between items-center p-2 bg-pale-red h-[100px]">
          <img
            src={Logo}
            alt="Logo"
            className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]"
          />
          <nav className="flex gap-4 sm:gap-8">
            <Link
              to="/about"
              className="text-white font-semibold hover:text-blue-400 hover:underline transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white font-semibold hover:text-blue-400 hover:underline transition duration-300"
            >
              Contact
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center items-center w-full">
          <div className="bg-white dark:bg-black text-black py-8 px-6 sm:w-[50%] md:px-[5%] flex flex-col gap-6 items-center bg-opacity-90 rounded-md shadow-lg">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-[36px] font-bold leading-[46px] dark:text-white">
                Read more, spend less with Book Swap.
              </h2>
              <p className="dark:text-white">Get Your Books Today.</p>
            </div>
            <div className="flex flex-col gap-4 w-full items-center">
              <Link to="/signin">
                <PrimaryButton btnLabel="Get Started" />
              </Link>
              <Link to="/signup">
                <button className="font-semibold py-2 px-5 sm:px-8 w-full dark:text-white">
                  Create new account
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer section */}
        <footer className="w-full bg-black text-white p-4 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="flex gap-4 mb-2">
              <a href="#" className="hover:text-blue-400 transition duration-300">
                <img src="path_to_logo1.png" alt="Logo 1" className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                <img src="path_to_logo2.png" alt="Logo 2" className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                <img src="path_to_logo3.png" alt="Logo 3" className="w-8 h-8" />
              </a>
            </div>
            <p className="text-center">&copy; 2024 Book Swap. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
