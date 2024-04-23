"use client"
import Header from "@/components/Header/Header";
import styles from "./page.module.css";

import { useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import Content from "@/components/Content/Content";

const itemsByPage = {
  "cars": [
    {
      id: "cars",
      title: "Lista"
    }
  ]
}

export default function Home() {
  const [page, setPage] = useState("cars")
  const [content, setContent] = useState("cars")
  const [pageItems, setPageItems] = useState(itemsByPage[page])
  // TODO: MAKE PERSISTENCE ON SERVER

  const handleHeaderClick = (itemId) => {
    if (itemId) {
      setPage(itemId)
      let foundContent = itemsByPage[itemId][0]
      setContent(foundContent.id)
      setPageItems(itemsByPage[itemId])
    }
  }

  const handleSideBarClick = (itemId) => {
    if (itemId) setContent(itemId)
  }

  const handleSaveCar = (data, id) => {
    console.log("id: ", id)
    if (id) {
      // EDIT ON CAR
      return
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header onClick={handleHeaderClick} />
      </div>
      <div className={styles.sideBar}>
        <SideBar page={page} items={pageItems} onClick={handleSideBarClick} />
      </div>
      <div className={styles.content}>
        <Content
          page={page}
          content={content}
          onSave={handleSaveCar}
        />
      </div>
    </div>
  );
}
