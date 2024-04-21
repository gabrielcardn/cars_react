"use client"
import Link from "next/link";
import styles from "./Header.module.css";


export default function Header(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <div className={styles.item} onClick={() => props.onClick('home')}>Home</div>
      <div className={styles.item} onClick={() => props.onClick("cars")}>Cars</div>
    </div>
  );
}
