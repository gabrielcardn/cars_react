"use client"
import styles from "./CarsList.module.css"

const CarsList = ({ cars, onCardClick }) => {
    const handleCarClick = (cardId) => {
        onCardClick(cardId)
    }

    let groups = Object.groupBy(cars, ({ brand }) => brand)
    return (
        <div className={styles.container}>
            <div className={styles.title}>Lista de Veículos</div>
            <div className={styles.panel}>
                {Object.keys(groups).map((key, lineIndex) => {
                    let group = groups[key]
                    return (
                        <div
                            className={styles.line}
                            key={"line:" + lineIndex}>
                            <div
                                className={styles.lineTitle}
                                key={"lineTitle:" + lineIndex}
                            >
                                {"Marca: " + key}
                            </div>
                            <div
                                className={styles.lineContentDivider}
                                key={"lineContentDivider:" + lineIndex}
                            />
                            <div
                                className={styles.lineItems}
                                key={"lineItems:" + lineIndex}
                            >
                                {group.map(car => {
                                    return (
                                        <div
                                            className={styles.item}
                                            key={car.id}
                                            onClick={() => handleCarClick(car.id)}>
                                            <p>Modelo: {car.nome_modelo}</p>
                                            <p>Ano: {car.ano}</p>
                                            <p>Combustível: {car.combustivel}</p>
                                            <p>Número de Portas: {car.num_portas}</p>
                                            <p>Cor: {car.cor}</p>
                                            <p>Valor: R$ {car.valor}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default CarsList;

