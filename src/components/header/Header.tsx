import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <img src={logo} />
      </div>
    </>
  );
}

export default Header;
