import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi"; // Cart icon
import { FaUserShield } from "react-icons/fa"; // Admin icon
import { FiUser } from "react-icons/fi"; // User icon
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; 
import { Link as ScrollLink } from "react-scroll";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "/products" },
  { id: 3, title: "Blog", scrollLink: "blog-section" }, 
  { id: 4, title: "About", link: "/about" },
  { id: 5, title: "Contact", link: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart(); 

  // Calculate total number of items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-brandDark text-white py-8 font-valera">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <a href="#" className="text-xl font-bold uppercase">
            Playing /<span className="font-extralight text-white/70">Market</span>
          </a>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex items-center gap-4">
          {NavbarMenu.map((item) => (
            <li key={item.id} className="mx-4 list-none">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followspeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                {item.scrollLink ? (
                  <ScrollLink
                    to={"blog"}
                    smooth={true}
                    duration={500}
                    className="inline-block text-sm py-2 px-3 uppercase cursor-pointer"
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <Link to={item.link} className="inline-block text-sm py-2 px-3 uppercase">
                    {item.title}
                  </Link>
                )}
              </UpdateFollower>
            </li>
          ))}

          {/* Cart Icon */}
          <div className="flex items-center gap-6 ps-14">
            {/* User Icon */}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followspeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <Link to="/login" className="text-xl">
                <FiUser />
              </Link>
            </UpdateFollower>

            {/* Admin Icon */}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followspeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <Link to="/admin-login" className="text-xl">
                <FaUserShield />
              </Link>
            </UpdateFollower>

            {/* Cart Icon */}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followspeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <Link to="/cart" className="relative flex items-center text-xl">
                <FiShoppingCart />
                {/* Cart Item Count */}
                {totalItems > 0 && (
                  <span className="absolute top-[-6px] right-[-6px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </UpdateFollower>
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center gap-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative text-2xl">
            <FiShoppingCart />
            {totalItems > 0 && (
              <span className="absolute top-[-6px] right-[-6px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Hamburger Icon */}
          <div onClick={toggleMenu}>
            {menuOpen ? <MdClose className="text-4xl" /> : <MdMenu className="text-4xl" />}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col items-center py-4 bg-brandDark text-white">
          {NavbarMenu.map((item) => (
            <li key={item.id} className="my-2 list-none">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followspeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                {item.scrollLink ? (
                  <ScrollLink
                    to={item.scrollLink}
                    smooth={true}
                    duration={500}
                    className="inline-block text-sm py-2 px-3 uppercase cursor-pointer"
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <Link
                    to={item.link}
                    className="inline-block text-sm py-2 px-3 uppercase"
                  >
                    {item.title}
                  </Link>
                )}
              </UpdateFollower>
            </li>
          ))}

          {/* Add Login and Admin Login Links in Mobile Menu */}
          <li className="my-2">
            <Link
              to="/login"
              className="inline-block text-sm py-2 px-3 uppercase text-white hover:text-gray-300"
            >
              Login
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/admin-login"
              className="inline-block text-sm py-2 px-3 uppercase text-white hover:text-gray-300"
            >
              Login as Admin
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
