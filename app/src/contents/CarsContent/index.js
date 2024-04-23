import CarsList from "@/components/CarsList/CarsList"
import ContentHeader from "@/components/ContentHeader/ContentHeader"
import { useState } from "react"
import Modal from "@/components/Modal/Modal"
import CarForm from "@/components/Form/CarForm"


const CarsContent = ({ page, content, cars, onSave }) => {
    const [showModal, setShowModal] = useState(false)
    const [editingCar, setEditingCar] = useState(null)

    const handleCreateClick = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleFormSave = (data, id) => {
        onSave(data, id)
        setShowModal(false)
    }

    const handleCardClick = (cardId) => {
        let foundCard = cars.find(car => car.id === cardId)
        setEditingCar(foundCard)
        setShowModal(true)
    }


    const form = (
        <CarForm
            onSave={handleFormSave}
            onCancel={handleCloseModal}
            editingCar={editingCar} />
    )

    return <>
        <ContentHeader
            page={page}
            content={content}
            onCreateClick={handleCreateClick}
        />
        <CarsList cars={cars} onCardClick={handleCardClick} />
        {showModal ? <Modal onClose={handleCloseModal} >
            {form}
        </Modal> : null}
    </>
}


export default CarsContent