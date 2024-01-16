import { useState } from "react";
import styles from "./LeftContent.module.css";
import btn from "../../assets/icon-arrow.svg";

function LeftPanel() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      setMessage("Message was sent!");
    } else {
      setMessage("Please provide a valid email");
    }
  };

  return (
    <div className={styles.leftContent}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>we're</h1>
        <h1 className={styles.secondTitle}>
          Coming <br /> soon
        </h1>
        <p>
          Hello fellow shoppers! We're currently building our new <br /> fashion
          store. Add your email below to stay up-to-date with <br />{" "}
          announcements and our launch deals.
        </p>
      </div>

      <div className={styles.input}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <button onClick={validateEmail} className={styles.imgValidate}>
          <img src={btn} />
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default LeftPanel;
