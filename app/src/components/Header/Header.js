"use client"
import styles from "./Header.module.css";


export default function Header({ onClick }) {

  return (
    <div className={styles.container}>
      <div className={styles.item} onClick={() => onClick('home')}>Home</div>
      <div className={styles.item} onClick={() => onClick("cars")}>Cars</div>
    </div>
  );
}
