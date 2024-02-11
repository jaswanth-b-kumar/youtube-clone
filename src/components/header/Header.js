import React from 'react';
import './_header.scss';

import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"

function Header({handleToggleSidebar}) {



  return (
    <div className="border border-dark header">
      <FaBars className="header-menu" size={26}  onClick={() => handleToggleSidebar()}/>
      <img
        src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
        alt=""
        className="header-img"
      />
      <form >
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={20} />
        </button>
      </form>
      <div className="header-icons">
        <MdNotifications size={20} />
        <MdApps size={20} />
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
          alt="avatar"
          className='user-icon'
        />
      </div>
    </div>
  )
}

export default Header