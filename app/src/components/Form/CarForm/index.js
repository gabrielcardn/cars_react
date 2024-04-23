import styles from "./CarForm.module.css"

const CarForm = ({ onCancel, onSave, onDelete, editingCar }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = {
            ano: formData.get('ano'),
            combustivel: formData.get('combustivel'),
            num_portas: formData.get('num_portas'),
            cor: formData.get('cor'),
            nome_modelo: formData.get('nome_modelo'),
            modelo_id: formData.get('modelo_id'),
            valor: formData.get('valor'),
            brand: formData.get('brand'),
        };
        onSave(formObject, editingCar?.id)
    };

    const handleCancel = () => {
        onCancel()
    }

    const handleDelete = () => {
        let confirmed = confirm("Deseja deletar esse registro?")
        console.log(confirmed)
        if (confirmed) {
            onDelete(editingCar.id)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="ano">Ano:</label>
            <input type="number" id="ano" defaultValue={editingCar ? editingCar.ano : null} name="ano" required min={1} />

            <label htmlFor="combustivel">Combustível:</label>
            <input type="text" id="combustivel" defaultValue={editingCar ? editingCar.combustivel : null} name="combustivel" required />

            <label htmlFor="num_portas">Número de Portas:</label>
            <input type="number" id="num_portas" defaultValue={editingCar ? editingCar.num_portas : null} name="num_portas" required min={1} />

            <label htmlFor="cor">Cor:</label>
            <input type="text" id="cor" defaultValue={editingCar ? editingCar.cor : null} name="cor" required />

            <label htmlFor="modelo_id">Modelo:</label>
            <input type="number" id="modelo_id" defaultValue={editingCar ? editingCar.modelo_id : null} name="modelo_id" required min={1} />

            <label htmlFor="nome_modelo">Nome do Modelo:</label>
            <input type="text" id="nome_modelo" defaultValue={editingCar ? editingCar.nome_modelo : null} name="nome_modelo" required />

            <label htmlFor="valor">{"Valor (em mil reais):"}</label>
            <input type="number" id="valor" defaultValue={editingCar ? editingCar.valor : null} name="valor" step={0.1} required min={0.1} />

            <label htmlFor="brand">Marca:</label>
            <input type="number" id="brand" defaultValue={editingCar ? editingCar.brand : null} name="brand" required min={1} />

            <section className={styles.footerButtons}>
                <button type="cancel" onClick={handleCancel}>Cancelar</button>
                {editingCar ?
                    <button type="delete" onClick={handleDelete}>Deletar</button>
                    : null
                }
                <button type="submit">Salvar</button>
            </section>
        </form>
    );
};

export default CarForm;