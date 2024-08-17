import { Outlet } from "react-router-dom";
import Sidebar from "../components/forDashboard/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="relative md:flex">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 md:ml-64">
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
