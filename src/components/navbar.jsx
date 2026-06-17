import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import "../assets/css/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyBrand</div>
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <HiX /> : <HiOutlineMenuAlt3 />}
      </button>
    </nav>
  );
}
