import classes from "./classes.module.css";
import { BiHomeAlt2, BiEnvelope, BiUser } from "react-icons/bi";

import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.sideBarContainer}>
        <nav className={classes.iconBox}>
          <Link href="/" className={classes.icon}>
            <BiHomeAlt2 color="rgba(143,143,143,255)" size="20px" />
          </Link>
          <Link href="/about-me" className={classes.icon}>
            <BiUser color="rgba(143,143,143,255)" size="20px" />
          </Link>
          <Link href="/contact-me" className={classes.icon}>
            <BiEnvelope color="rgba(143,143,143,255)" size="20px" />
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default Layout;
