

import styles from "./Modal.module.css"

const Modal = ({ onClose, children }) => {


    return <div className={styles.container}>
        <div className={styles.content}>
            <span className={styles.close} onClick={onClose}>&times;</span>
                {children}
        </div>

    </div>
}

export default Modal