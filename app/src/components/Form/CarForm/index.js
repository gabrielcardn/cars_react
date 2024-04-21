import styles from "./CarForm.module.css"

const CarForm = ({ onCancel, onSave }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = {
            ano: formData.get('ano'),
            combustivel: formData.get('combustivel'),
            num_portas: formData.get('num_portas'),
            cor: formData.get('cor'),
            nome_modelo: formData.get('nome_modelo'),
            valor: formData.get('valor'),
            brand: formData.get('brand'),
        };
        onSave(formObject)
    };

    const handleCancel = () => {
        onCancel()
    }
    //defaultValue={2014}
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="ano">Ano:</label>
            <input type="number" id="ano" name="ano" required />

            <label htmlFor="combustivel">Combustível:</label>
            <input type="text" id="combustivel" name="combustivel" required />

            <label htmlFor="num_portas">Número de Portas:</label>
            <input type="number" id="num_portas" name="num_portas" required />

            <label htmlFor="cor">Cor:</label>
            <input type="text" id="cor" name="cor" required />

            <label htmlFor="nome_modelo">Nome do Modelo:</label>
            <input type="text" id="nome_modelo" name="nome_modelo" required />

            <label htmlFor="valor">Valor:</label>
            <input type="number" id="valor" name="valor" step={0.01} required />

            <label htmlFor="brand">Marca:</label>
            <input type="number" id="brand" name="brand" required />

            <section className={styles.footerButtons}>
                <button type="cancel" onClick={handleCancel}>Cancelar</button>
                <button type="submit">Salvar</button>
            </section>
        </form>
    );
};

export default CarForm;