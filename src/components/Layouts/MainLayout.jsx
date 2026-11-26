
import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";

function MainLayout(props) {
  const { children } = props;

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="bg-defaultBlack w-40 min-w-40 shrink-0 text-special-bg2 flex flex-col justify-between px-3 py-12">

        <div>
          {/* Logo */}
          <div className="mb-10">
            <Logo variant="secondary" />
          </div>

          {/* Menu */}
          <nav>
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center px-3 py-3 rounded-md whitespace-nowrap hover:text-white hover:font-bold ${
                    isActive
                      ? "bg-primary text-white font-bold"
                      : "hover:bg-special-bg3"
                  }`
                }
              >
                <div className="shrink-0">
                  {item.icon}
                </div>

                <div className="ms-3">
                  {item.name}
                </div>
              </NavLink>
            ))}
          </nav>
        </div>

        
        {/* Logout dan Profile */}
        <div>
        {/* Logout */}
        <div className="flex items-center bg-special-bg3 text-white px-3 py-3 rounded-md whitespace-nowrap">
            <div className="shrink-0">
            <Icon.Logout />
            </div>
            <div className="ms-3">Logout</div>
        </div>

        {/* Garis pemisah */}
        <div className="border my-8 border-b-special-bg"></div>

        
        {/* User Profile */}
        <div className="flex justify-between items-center text-xs text-white">

        <div className="shrink-0">
            Avatar
        </div>

        <div className="leading-tight">
            Username
            <br />
            View Profile
        </div>

        <div className="shrink-0">
            <MoreVertIcon fontSize="small" />
        </div>

        </div>
        </div>
        </aside>


      {/* Main Content */}
      <div className="bg-special-mainBg flex-1 min-w-0 flex flex-col">

        {/* Header */}
        <header className="border-b border-gray-05 px-6 py-7 flex justify-between items-center">

          <div className="flex items-center">
            <div className="font-bold text-2xl me-6">
              Username
            </div>

            <div className="text-gray-03 flex items-center">
              <Icon.ChevronRight size={20} />
              <span>May 19, 2023</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="me-10">
              <NotificationsIcon className="text-gray-01 scale-110" />
            </div>

            <Input
              backgroundColor="bg-white"
              border="border-white"
            />
          </div>

        </header>

        {/* Page Content */}
        <main className="flex-1 min-w-0 px-6 py-4">
          {children}
        </main>

      </div>
    </div>
  );
}

export default MainLayout;
