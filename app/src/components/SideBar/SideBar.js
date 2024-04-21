
import styles from "./SideBar.module.css";



const pagesTitle = {
    "home": "Tela inicial",
    "cars": "Carros"
}

const SideBar = ({ page, items, onClick }) => {


    const handleItemClick = (itemId) => {
        onClick(itemId)
    }



    return (
        <div className={styles.container}>
            <div className={styles.title}>{pagesTitle[page]}</div>
            {items.length ?
                <ul className={styles.list}>
                    {items.map(item =>
                        <li key={item.id} className={styles.item} onClick={() => handleItemClick(item.id)}>
                            {item.title}
                        </li>
                    )}
                </ul> : null
            }
        </div>
    )
}


export default SideBar