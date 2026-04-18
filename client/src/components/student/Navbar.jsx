import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { UserButton, useClerk, useUser } from "@clerk/react";

const Navbar = () => {
  const clerk = useClerk();
  const { user } = useUser();
  const isCourselistPage = window.location.pathname.includes("/course-list");

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourselistPage ? "bg-white" : "bg-cyan-100/70"}`}
    >
      <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-6 text-gray-500">
        <div className="flex items-center gap-6">
          <button className="me-3">Become Educator</button>
          <Link to="/my-enrollments">My Enrollments</Link>
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
            onClick={() => clerk.openSignUp()}
          >
            Create Account
          </button>
        )}
      </div>
      {/* for mobile view */}
      <div className="md:hidden  flex items-center gap-2 sm:gap-5 text-gray-500">
        <div>
          <button className="me-3">Become Educator</button>
          <Link to="/my-enrollments">My Enrollments</Link>
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => clerk.openSignUp()}>
            <img src={assets.user_icon} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
