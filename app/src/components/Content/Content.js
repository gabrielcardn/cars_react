"use client"
import styles from "./Content.module.css";

import { CarsContent } from "@/contents";


const Content = ({ page, content,  onSave }) => {
  let contentComponent;
  switch (content) {
    case "cars":
      contentComponent = <CarsContent
        page={page}
        content={content}
        onSave={onSave}
      />
      break
  }

  return (
    <div className={styles.container}>
      {contentComponent}
    </div>
  );
}

export default Content
