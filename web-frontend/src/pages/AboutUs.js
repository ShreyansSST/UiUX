import React from "react";

const AboutUs = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-white z-50">
      <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between py-16 lg:flex-row">
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-40 lg:max-w-xl lg:pr-5">
              <p className="flex text-sm uppercase text-g1">About Us</p>
              <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                Spend Less Read
                <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">
                  More
                </span>
              </h2>
              <p className="text-base text-gray-700">
                Welcome to BookExchange, the ultimate platform for book lovers
                and knowledge seekers! At BookExchange, we believe that everyone
                should have access to books and the wealth of knowledge they
                contain, without the constraints of cost. Our mission is to
                create a community where books are shared freely, fostering a
                love for reading and lifelong learning.
              </p>
              <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                Our Vision
              </h2>
              <p className="text-base text-gray-700">
                In a world where information is power, we envision a community
                where books are freely accessible to everyone. By connecting
                people who love to read, we aim to break down barriers to
                knowledge and create a more informed and educated society.
              </p>
              <div className="mt-10 flex flex-row items-center justify-between">
                {" "}
                {/* Changed from flex-col to flex-row */}
                <a
                  href="/"
                  className="mb-3 inline-flex h-12 w-auto items-center justify-center rounded bg-pale-green px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0"
                >
                  View More
                </a>
                <a
                  href="/"
                  className="group inline-flex items-center font-semibold text-g1"
                >
                 Visit Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative mt-10 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
            </div>
          </div>
          <div className="relative hidden lg:block lg:w-1/2">
            <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
              <img src="https://placehold.co/400x400" alt="main" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
