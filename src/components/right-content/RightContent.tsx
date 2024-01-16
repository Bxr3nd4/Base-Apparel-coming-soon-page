import styles from "./RightContent.module.css"
import hero from "../../assets/hero-desktop.jpg"
function RightContent () {
    return(
        <div className={styles.bgImg}>
            <img src={hero}/>
        </div>
    );

}
export default RightContent;