// RRD
import { Outlet } from "react-router-dom";

import OnlineUsers from "../components/OnlineUsers";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <main className="bg-slate-9000 w-full">
        <Outlet />
      </main>
      <OnlineUsers />
    </div>
  );
}
export default MainLayout;
