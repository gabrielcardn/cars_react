"use client"
import styles from "./Content.module.css";

import { CarsContent } from "@/contents";


const Content = ({ page, content, onCreateClick, cars, onSave }) => {
  let contentComponent;
  switch (content) {
    case "challenge":
    case "decisions":
      contentComponent = <h2>{"TODO: " + page + "/" + content}</h2>
      break;
    case "cars":
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
