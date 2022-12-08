import Form from "../../components/Form/Form";
import "./UpdateDestination.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const UpdateDestination = () => {

    const {id} = useParams();
    const [chosenDestination, setChosenDestination] = useState({});


    const handleUpdateDestination = async destination => {
        const res = await fetch(`http://localhost:8080/destination/${id}`, 
        {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(destination)
        });
        if(res.ok) {
            alert("Destination review has been updated");
            return;
        } else {
            alert("Something went wrong.")
        }
    }

    const getChosenDestinationById = async id => {
        const res = await fetch(`http://localhost:8080/destination/${id}`)
        const data = await res.json();
        setChosenDestination(data);
    }

    useEffect(() => {
        getChosenDestinationById(id)
    }, [id]);


    const defaultFormState = { 
        name: "", 
        location: "", 
        image: "", 
        cost: "", 
        visit: "", 
        dateFrom: "", 
        dateTo: "", 
        comment: "",
    }

    return (
        <div className="upload">
            <h1 className="upload__title">{chosenDestination.location}</h1>
            <img className="upload__image" src={chosenDestination.image} alt={chosenDestination.location} />
            <h2 className="upload__text">Places to visit: {chosenDestination.visit} </h2>
            <h2 className="upload__text">Review written by: {chosenDestination.name}</h2>
            <h2 className="upload__text">Date travelled: {chosenDestination.dateFrom} - {chosenDestination.dateTo}</h2>
            <h2 className="upload__text">Created on: {chosenDestination.dateCreated}</h2>
            <Form defaultFormState={defaultFormState} handleSubmitForm={handleUpdateDestination} formTitle={`Update Your Destination Travel`} page="update"/>
        </div>
    )

}

export default UpdateDestination;