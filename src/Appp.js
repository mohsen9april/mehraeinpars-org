import "./App.css";
import ItemSidebar from "./components/ItemSidebar/ItemSidebar";
import TocRoundedIcon from "@mui/icons-material/TocRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import SettingsRemoteRoundedIcon from "@mui/icons-material/SettingsRemoteRounded";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    console.log("Clicked !");
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      width: "6rem",
      transition: {
        delay: 0.5,
      },
    },
  };

  const sidebarVariants = {
    true: {
      width: "15rem",
    },
    false: {
      width: "3rem",
      transition: {
        delay: 0.5,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };

  return (
    <div className="App">
      <div className="up_container">
        {/* Body Container */}
        <div className="body_container">
          <h1>Body</h1>
        </div>
        {/* Sidebar Container */}
        <motion.div
          data-Open={open}
          variants={sideContainerVariants}
          initial={`${open}`}
          animate={`${open}`}
          className="sidebar_container"
        >
          {/* sidebar */}
          <motion.div
            initial={`${open}`}
            animate={`${open}`}
            variants={sidebarVariants}
            className="sidebar"
          >
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
              onClick={handleToggle}
              className="lines_icon"
            >
              <TocRoundedIcon />
            </motion.div>
            {/* profile */}
            <motion.div
              layout
              initial={`${open}`}
              animate={`${open}`}
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
            <div className="groups">
              <div className="group">
                <ItemSidebar icon={<DashboardRoundedIcon />} name="???????? ????????" />
                <ItemSidebar icon={<BarChartRoundedIcon />} name="??????????????" />
                <ItemSidebar icon={<AttachMoneyRoundedIcon />} name="???????? ??????????????" />
                <ItemSidebar icon={<AssignmentTurnedInRoundedIcon />} name="???????????? ????" />
                <ItemSidebar icon={<AccountCircleRoundedIcon />} name="???????? ???? ????" />
                <ItemSidebar icon={<SettingsRemoteRoundedIcon />} name="??????????" />
                <ItemSidebar icon={<ColorLensRoundedIcon />} name="?????????? ???? ????????" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
