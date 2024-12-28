import React from "react";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";

function Sidebar() {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="bg-violet-400 h-screen w-[350px] p-10">
      <Avatar user={user} />
    </div>
  );
}

export default Sidebar;
