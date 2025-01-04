import React from "react";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { FaPlus, FaClipboardList } from "react-icons/fa";
import { useSignout } from "../hooks/useSignout";

function Sidebar() {
  const { logout } = useSignout();
  const { user } = useSelector((store) => store.user);
  return (
    <div className="bg-violet-700 h-screen w-[350px] text-white flex flex-col pt-5">
      <Avatar user={user} />

      <ul className="text-black flex flex-col pr-0 pl-10 mb-auto mt-20">
        <li className="nav-item">
          <NavLink
            to="/"
            className="flex items-center px-3 py-2 rounded-l-3xl gap-2"
          >
            <FaClipboardList />
            Project
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/create"
            className="flex items-center px-3 py-2 rounded-l-3xl gap-2"
          >
            <FaPlus className="w-5" />
            Create
          </NavLink>
        </li>
      </ul>

      <div className="mb-10 flex justify-center">
        <button onClick={logout} className="btn btn-active px-6">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
