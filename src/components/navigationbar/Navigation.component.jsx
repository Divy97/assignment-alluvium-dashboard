import {
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";

import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";

import "./Navigation.styles.css";

const NavigationBar = () => {
  return (
    <div className="navigation_container">
      <div>
        <input
          type="search"
          placeholder="Search"
          className="navigation_searchBar"
        />
        <AiOutlineSearch className="navigation_searchBar_icon" />
      </div>
      <div className="navigation_utility_iconsContainer">
        <AiOutlineBell className="navigation_utility_icon" />
        <AiOutlineMail className="navigation_utility_icon" />
        <AiOutlineSetting className="navigation_utility_icon" />
        <span className="navigation_span">Filter </span>
        <HiOutlineAdjustmentsVertical className="background vertical" />
      </div>
      <div className="navigation_profile_container">
        <span>RABS </span>{" "}
        <RxAvatar className="navigation_utility_avatarIcon" />
      </div>
      <SlArrowDown className="navigation_utility_arrowIcon" />
    </div>
  );
};

export default NavigationBar;
