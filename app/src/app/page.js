"use client"
import Header from "@/components/Header/Header";
import styles from "./page.module.css";

import VehicleList from "@/components/VehicleList";

const vehiclesData = [
  {

    "id": 1,
    "timestamp_cadastro": 1696539488,
    "modelo_id": 12,
    "ano": 2015,
    "combustivel": "FLEX",
    "num_portas": 4,
    "cor": "BEGE",
    "nome_modelo": "ONIX PLUS",
    "valor": 50.000
  },
  {

    "id": 2,
    "timestamp_cadastro": 1696531234,
    "modelo_id": 14,
    "ano": 2014,
    "combustivel": "FLEX",
    "num_portas": 4,
    "cor": "AZUL",
    "nome_modelo": "JETTA",
    "valor": 49.000
  },
  {

    "id": 3,
    "timestamp_cadastro": 16965354321,
    "modelo_id": 79,
    "ano": 1993,
    "combustivel": "DIESEL",
    "num_portas": 4,
    "cor": "AZUL",
    "nome_modelo": "HILLUX SW4",
    "valor": 47.500
  }
]
export default function Home() {

  const handleHeaderClick = (itemId) => {
    alert(itemId)
  }


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header handleClick={handleHeaderClick} />
      </div>
      {/* <div className={styles.main}> */}
      {/* MAIN */}
      <div className={styles.sideBar}>SIDEBAR</div>
      <div className={styles.content}>CONTENT
        {/* <VehicleList vehicles={vehiclesData} /> */}
      </div>
      {/* </div> */}
    </div>
  );
}
