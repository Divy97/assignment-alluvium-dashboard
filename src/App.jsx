import React from "react";
import NavigationBar from "./components/navigationbar/Navigation.component";
import Sidebar from "./components/sidebar/Sidebar.component";

import "./App.css";

const App = () => {
  return (
    <div className="app_container">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="otherItems">
        <NavigationBar />
      </div>
    </div>
  );
};

export default App;
