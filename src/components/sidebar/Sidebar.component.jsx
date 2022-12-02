import React from "react";
import "./Sidebar.styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_list_container">
        <ul>
          <li className="sidebar_logo">LOGO</li>
          <li className="sidebar_list_items active">Dashboard</li>
          <li className="sidebar_list_items">Report</li>
          <li className="sidebar_list_items">Floor Board</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
