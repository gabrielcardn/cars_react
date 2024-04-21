import VehicleList from "@/components/VehicleList/VehicleList"
import ContentHeader from "@/components/ContentHeader/ContentHeader"
import { useState } from "react"
import Modal from "@/components/Modal/Modal"
import CarForm from "@/components/Form/CarForm"


const CarsContent = ({ page, content, cars, onSave }) => {
    const [showModal, setShowModal] = useState(false)

    const handleCreateClick = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleFormSave = (data) => {
        onSave(data)
        setShowModal(false)
    }


    const form = <CarForm onSave={handleFormSave} onCancel={handleCloseModal} />
    return <>
        <ContentHeader
            page={page}
            content={content}
            onCreateClick={handleCreateClick}
        />
        <VehicleList vehicles={cars} />
        {showModal ? <Modal onClose={handleCloseModal} >
            {form}
        </Modal> : null}
    </>
}


export default CarsContent