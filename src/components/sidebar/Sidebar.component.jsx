import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsClipboardPlus } from "react-icons/bs";

import "./Sidebar.styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_list_container">
        <ul>
          <li className="sidebar_logo">LOGO</li>
          <li className="sidebar_list_items active">
            <AiOutlineHome className="home_icon background" />
            Dashboard
          </li>
          <li className="sidebar_list_items">
            <HiOutlineDocumentReport className="home_icon background" />
            Report
          </li>
          <li className="sidebar_list_items">
            <BsClipboardPlus className="home_icon background" /> Floor Board
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
