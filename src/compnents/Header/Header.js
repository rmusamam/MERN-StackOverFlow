import React from "react";
import "./CSS/header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <img
            src="data:image/png;base64,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"
            alt="logo"
          />
          <h3>Product</h3>
        </div>
        <div className="header-middle"> 
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search... " />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            <Avatar />
            <InboxIcon />
            <svg
              aria-hidden="true"
              // class="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,.5)"
              style={{
                cursor: "pointer"
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v313-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
