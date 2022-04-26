import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import "./styles.scss";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <header>
      <div className="navbar fade-in">
        <div className="nav-container">
          <ul className={click ? "nav-menu-responsive" : "nav-menu"}>
            <li>
              <a href="/#home" onClick={() => setClick(!click)}>
                Home
              </a>
            </li>
            <li>
              <a href="/#about" onClick={() => setClick(!click)}>
                Sobre
              </a>
            </li>
            <li>
              <a href="/#projects" onClick={() => setClick(!click)}>
                Projetos
              </a>
            </li>
            {/* <li>
              <a href="/#skills" onClick={() => setClick(!click)}>
                Habilidades
              </a>
            </li> */}
            <li>
              <a href="/#contact" onClick={() => setClick(!click)}>
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div
          className={click ? "nav-icon-open" : "nav-icon"}
          onClick={handleClick}
        >
        {click ? <IoMdClose /> : <HiOutlineMenuAlt4 />}
        </div>
      </div>
    </header>
  );
}

export default Header;
