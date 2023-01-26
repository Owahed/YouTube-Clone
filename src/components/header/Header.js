import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({ handelSidebarToggle }) => {
  return (
    <div className="border border-dark header">
      <FaBars
        className="header_menu"
        size={26}
        onClick={() => handelSidebarToggle()}
      />
      <div className="header_main_icon">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
          className="header_logo"
        />
        <h5 className="header_logo_name">YouTube</h5>
      </div>

      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <dic className="header_icons">
        <MdNotifications size={28} />
        <MdApps size={28} />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5MH5AMJXnmEHXkfKL1Ob36D91huvEw5rlQ&usqp=CAU"
          alt="avatar"
        />
      </dic>
    </div>
  );
};

export default Header;
