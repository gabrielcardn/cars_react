"use client"
import { useEffect, useState } from "react"

import ContentHeader from "@/components/ContentHeader/ContentHeader"
import Modal from "@/components/Modal/Modal"
import CarForm from "@/components/Form/CarForm"
import CarsList from "@/components/CarsList/CarsList"


const CarsContent = ({ page, content, onSave }) => {
    const [showModal, setShowModal] = useState(false)
    const [editingCar, setEditingCar] = useState(null)
    const [carsData, setCarsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [mutator, setMutator] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:3001/cars", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(d => {
            console.log(d)
            if (!d.status) throw new Error(d.message)
            setCarsData(d.data)
        });
        setLoading(false)
        setMutator(null)
    }, [mutator])

    if (loading) return <h1>Loading...</h1>

    const handleCreateClick = () => {
        setEditingCar(null)
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleFormSave = (data, id) => {
        if (id) {
            console.log(JSON.stringify(data))
            fetch("http://localhost:3001/cars/?id=" + id, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(d => {
                setMutator(d)
            })
        }

        if (!id) {
            fetch("http://localhost:3001/cars", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(d => {
                setMutator(d)
            })
        }
        setShowModal(false)
    }

    const handleFormDelete = (id) => {
        fetch("http://localhost:3001/cars/?id=" + id, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()).then(d => {
            setMutator(d);
        });

        setShowModal(false);
    }

    const handleCardClick = (cardId) => {
        fetch("http://localhost:3001/cars/?id=" + cardId, {
            method: "GET",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(d => {
            if (!d.status) throw new Error(d.message)
            setEditingCar(d.data)
            setShowModal(true)
        })
    }


    const form = (
        <CarForm
            onSave={handleFormSave}
            onCancel={handleCloseModal}
            onDelete={handleFormDelete}
            editingCar={editingCar} />
    )

    return <>
        <ContentHeader
            page={page}
            content={content}
            onCreateClick={handleCreateClick}
        />
        <CarsList cars={carsData} onCardClick={handleCardClick} />
        {showModal ? <Modal onClose={handleCloseModal} >
            {form}
        </Modal> : null}
    </>
}


export default CarsContent