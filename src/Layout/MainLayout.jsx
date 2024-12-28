// RRD
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import OnlineUsers from "../components/OnlineUsers";

function MainLayout() {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <main className="bg-white w-full p-10">
        <Outlet />
      </main>
      <OnlineUsers />
    </div>
  );
}

export default MainLayout;