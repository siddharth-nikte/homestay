










import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSignedUp, setIsSignedUp] = useState(false); // Track signup status
  const [isModalOpen, setIsModalOpen] = useState(false); // For showing signup modal
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Load the signup status from localStorage on page load
    const storedStatus = localStorage.getItem("isSignedUp");
    if (storedStatus === "true") {
      setIsSignedUp(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleSignup = () => {
    // Open the signup modal
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setErrorMessage(""); // Reset error message on close
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    // Password validation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Simulate successful signup
    setIsSignedUp(true);
    localStorage.setItem("isSignedUp", "true"); // Store signup status in localStorage
    setIsModalOpen(false);
  };

  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
    />
  );

  // Show signup first message if the user isn't signed up and clicks any restricted link
  const handleLinkClick = (e, section) => {
    if (!isSignedUp) {
      e.preventDefault();  // Prevent navigation
      alert("Please sign up first to access this section.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`bg-black text-black fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse"
          >
            <div className="relative h-10 xs:h-12 sm:h-14 md:h-12 aspect-square">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-base xs:text-xl sm:text-2xl text-white font-semibold whitespace-nowrap">
              Vakratunda Homestay
            </span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center w-auto h-10 justify-center text-sm text-white rounded-lg md:hidden transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                animate={isMenuOpen ? "open" : "closed"}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
                animate={isMenuOpen ? "open" : "closed"}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
                animate={isMenuOpen ? "open" : "closed"}
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto transition-all duration-300 ${
              isMenuOpen && isMobile ? "bg-black/80 rounded-lg mt-4" : ""
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-transparent text-white">
              {/* Always show signup button */}
              <li>
                <button
                  onClick={handleSignup}
                  className="block py-2 px-3 text-sm sm:text-base rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent md:hover:text-gray-300"
                >
                  Signup
                </button>
              </li>

              {/* Links that require signup */}
              <li>
                <Link
                  href="/#about"
                  onClick={(e) => handleLinkClick(e, "About")}
                  className={`block py-2 px-3 text-sm sm:text-base rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent md:hover:text-gray-300 ${!isSignedUp ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  onClick={(e) => handleLinkClick(e, "Gallery")}
                  className={`block py-2 px-3 text-sm sm:text-base rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent md:hover:text-gray-300 ${!isSignedUp ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/#destinations"
                  onClick={(e) => handleLinkClick(e, "Destinations")}
                  className={`block py-2 px-3 text-sm sm:text-base rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent md:hover:text-gray-300 ${!isSignedUp ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  onClick={(e) => handleLinkClick(e, "Testimonials")}
                  className={`block py-2 px-3 text-sm sm:text-base rounded transition-all duration-300 hover:bg-gray-200 hover:text-gray-800 md:hover:bg-transparent md:hover:text-gray-300 ${!isSignedUp ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Signup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

              <div className="mt-4 flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-500 text-white py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;