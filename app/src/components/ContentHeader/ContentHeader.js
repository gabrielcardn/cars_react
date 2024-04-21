

import styles from "./ContentHeader.module.css"

const ContentHeader = ({ onCreateClick, page, content }) => {

    const handleCreateClick = () => {
        onCreateClick()
    }

    return <div className={styles.container}>
        <button className={styles.button} onClick={handleCreateClick}>
            Criar
        </button>
    </div>
}

export default ContentHeader