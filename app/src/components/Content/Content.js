"use client"
import styles from "./Content.module.css";

import { CarsContent } from "@/contents";


const Content = ({ page, content, onCreateClick, cars, onSave }) => {
  let contentComponent;
  switch (content) {
    case "cars1":
      contentComponent = <CarsContent
        page={page}
        content={content}
        onCreateClick={onCreateClick}
        cars={cars}
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
