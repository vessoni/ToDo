import { useState } from "react";

import logo from "../assets/logo.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />
    </header>
  );
}

export default Header;
