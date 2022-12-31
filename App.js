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

function App() {
  return (
    <div className="App">
      <div className="body_container">
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
        <h2>Body</h2>
        <hr />
      </div>
      <div className="sidebar_container">
        <div className="sidebar">
          {/* lines_icon */}
          <div className="lines_icon">
            <TocRoundedIcon />
          </div>
          {/* profile */}
          <div className="profile">
            <img src="./images/Logo.png" alt="profile_img" />
          </div>
          <div className="groups">
            <div className="group">
              <ItemSidebar icon={<DashboardRoundedIcon />} name="Dashbord" />
              <ItemSidebar icon={<BarChartRoundedIcon />} name="Performance" />
              <ItemSidebar icon={<AttachMoneyRoundedIcon />} name="Sales" />
              <ItemSidebar icon={<AssignmentTurnedInRoundedIcon />} name="Checklist" />
              <ItemSidebar icon={<AccountCircleRoundedIcon />} name="Costumers" />
              <ItemSidebar icon={<SettingsRemoteRoundedIcon />} name="Segments" />
              <ItemSidebar icon={<ColorLensRoundedIcon />} name="Themes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
