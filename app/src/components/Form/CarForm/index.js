import styles from "./CarForm.module.css"

const CarForm = ({ onCancel, onSave, editingCar }) => {
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
        onSave(formObject, editingCar?.id)
    };

    const handleCancel = () => {
        onCancel()
    }
    //defaultValue={2014}
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="ano">Ano:</label>
            <input type="number" id="ano" defaultValue={editingCar ? editingCar.ano : null} name="ano" required />

            <label htmlFor="combustivel">Combustível:</label>
            <input type="text" id="combustivel" defaultValue={editingCar ? editingCar.combustivel : null} name="combustivel" required />

            <label htmlFor="num_portas">Número de Portas:</label>
            <input type="number" id="num_portas" defaultValue={editingCar ? editingCar.num_portas : null} name="num_portas" required />

            <label htmlFor="cor">Cor:</label>
            <input type="text" id="cor" defaultValue={editingCar ? editingCar.cor : null} name="cor" required />

            <label htmlFor="nome_modelo">Nome do Modelo:</label>
            <input type="text" id="nome_modelo" defaultValue={editingCar ? editingCar.nome_modelo : null} name="nome_modelo" required />

            <label htmlFor="valor">Valor:</label>
            <input type="number" id="valor" defaultValue={editingCar ? editingCar.valor : null} name="valor" step={0.01} required />

            <label htmlFor="brand">Marca:</label>
            <input type="number" id="brand" defaultValue={editingCar ? editingCar.brand : null} name="brand" required />

            <section className={styles.footerButtons}>
                <button type="cancel" onClick={handleCancel}>Cancelar</button>
                <button type="submit">Salvar</button>
            </section>
        </form>
    );
};

export default CarForm;