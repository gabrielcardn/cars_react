"use client"
import Header from "@/components/Header/Header";
import styles from "./page.module.css";

import { useState } from "react";
import SideBar from "@/components/SideBar/SideBar";
import Content from "@/components/Content/Content";
import carsData from "../contents/CarsContent/cars.json"

const itemsByPage = {
  "home": [
    {
      id: "item1",
      title: "Item 1",
    }, {
      id: "item2",
      title: "Item 2",
    }, {
      id: "item3",
      title: "Item 3",
    },
  ],
  "cars": [
    {
      id: "cars1",
      title: "Carros 01"
    }
  ]
}

export default function Home() {
  const [page, setPage] = useState("home")
  const [content, setContent] = useState(null)
  const [pageItems, setPageItems] = useState(itemsByPage[page])
  // TODO: MAKE PERSISTENCE ON SERVER
  const [cars, setCars] = useState(carsData)

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

  const handleCreateClick = (page, content) => {

  }

  const handleSaveCars = (data) => {
    // create new
    const lastCar = cars[cars.length - 1]
    let newId = lastCar.id + 1
    let newCar = {
      id: newId,
      ...data,
    }
    setCars([
      ...cars,
      newCar
    ])
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
          cars={cars}
          onCreateClick={handleCreateClick}
          onSave={handleSaveCars}
        />
      </div>
    </div>
  );
}
