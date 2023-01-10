import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaLock, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TocRoundedIcon from "@mui/icons-material/TocRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import SettingsRemoteRoundedIcon from "@mui/icons-material/SettingsRemoteRounded";

const routes = [
  {
    path: "/",
    name: "صفحه اصلی",
    icon: <DashboardRoundedIcon />,
  },
  {
    path: "/Products",
    name: "محصولات",
    icon: <BarChartRoundedIcon />,
  },
  {
    path: "/About",
    name: "درباره ما",
    icon: <AccountCircleRoundedIcon />,
  },
  {
    path: "/Newline",
    name: "خط جدید",
    icon: <AssignmentTurnedInRoundedIcon />,
  },
  {
    path: "/Reports",
    name: " گزارش ",
    icon: <BarChartRoundedIcon />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [show, setShow] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const controlSidebar = () => {
    if (window.scrollY > 100) {
      setShow(false);
      setIsOpen(false);
    } else {
      setShow(true);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlSidebar);
    return () => {
      window.removeEventListener("scroll", controlSidebar);
    };
  }, []);

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      // alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{ width: isOpen ? "10rem" : "5rem" }}
          className={`nav ${show && "nav__blue"}`}
        >
          <div className="top_section">
            {/* lines_icon */}
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 180,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(4.5px)",
                WebkitBackdropFilter: "blur(4.5px)",
                border: "1px solid rgba( 255, 255, 255, 0.7 )",
                transition: {
                  delay: 0.1,
                  duration: 0.25,
                },
              }}
              onClick={toggle}
              className="lines_icon"
            >
              <TocRoundedIcon />
            </motion.div>

            {/* profile */}
            <motion.div
              layout
              initial={`${isOpen}`}
              animate={`${isOpen}`}
              variants={profileVariants}
              transition={{ duration: 0.5 }}
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(5.5px)",
                WebkitBackdropFilter: "blur(5.5px)",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                cursor: "pointer",
              }}
              className="profile"
            >
              <img src="./images/Logo.png" alt="profile_img" />
            </motion.div>

            {/* {isOpen && <h3 className="logo">Do Somthing</h3>}
            <div className="bars">
              <FaBars onClick={toggle} />
            </div> */}
          </div>
          <section className="routes">
            {routes.map((route) => {
              return (
                <>
                  <NavLink to={route.path} key={route.name} className="link">
                    <motion.div
                      whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                        backdropFilter: "blur(5.5px)",
                        WebkitBackdropFilter: "blur(5.5px)",
                        border: "1px solid rgba( 255, 255, 255, 0.18 )",
                        cursor: "pointer",
                      }}
                      transition={{
                        // type: "none",
                        duration: 0.1,
                      }}
                      className="link_items"
                    >
                      <motion.div className="icon"> {route.icon}</motion.div>
                      {isOpen && <div className="link_text">{route.name}</div>}
                    </motion.div>
                  </NavLink>
                </>
              );
            })}
          </section>
        </motion.div>
        <main className="main_container">{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
