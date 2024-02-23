import styles from "./page.module.css";

export default function page(){
    return (
        <div id={styles.testing_css}>
            <div className={styles.red}>Text #01</div>
            <div className={styles.blue}>Text #02</div>
            <div className={styles.white}>Text #03</div>
        </div>
    );
}