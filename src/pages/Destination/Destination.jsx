import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate as navigate } from "react-router-dom";
import "./Destination.scss";

const Destination = () => {

    const {id} = useParams();
    const [chosenDestination, setChosenDestination] = useState({});
    const [pinEntered, setPinEnter] = useState("");

    const getChosenDestinationById = async id => {
        const res = await fetch(`http://localhost:8080/destination/${id}`)
        const data = await res.json();
        setChosenDestination(data);
    }

    useEffect(() => {
        getChosenDestinationById(id);
    }, [id]);

    const handleInput = (e) => {
        setPinEnter(e.target.value);
    }

    const pin = "2022!"

    const handleDeleteDestination = async () => {
        if (pinEntered === pin) {
            const res = await fetch(`http://localhost:8080/destination/${id}`, 
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if(res.ok) {
                alert("Destination review has been deleted. Refresh the page");
                navigate("/destinations");
            } else {
                alert("Something went wrong.")
            }
        } else {
            alert("Enter the correct pin")
        }
    }


    return (
        <div className={"destination"}>
            <NavLink to="/destinations">
                <div className="back" >
                    {"<"}
                </div>
            </NavLink>
            <div className="destination__delete-container">
                <input 
                    className="pin" 
                    type="text" 
                    placeholder="pin"
                    onInput={handleInput}
                    value={pinEntered}/>
                <button className="destination__comment--button delete" onClick={handleDeleteDestination}>Delete</button>
            </div>
            
            <h1 className="destination__title">{chosenDestination.location}</h1>
            <div className="destination__info-container">
                <div className="destination__image-container">
                    <img src={chosenDestination.image} alt={chosenDestination.location} className="destination__image" />
                </div>
                <div className="destination__info">
                    <h3 className="destination__text">Cost: {chosenDestination.cost}</h3>
                    <h3 className="destination__text">Places to Visit: {chosenDestination.visit}</h3>
                    <h3 className="destination__text">Date Travelled: {chosenDestination.dateFrom} - {chosenDestination.dateTo}</h3>
                    <div className="destination__comment">
                        <h3 className="destination__comment--title">Comment</h3>
                        <p className="destination__comment--comment">
                            {chosenDestination.comment}
                            <NavLink className="destination__comment--link" to={`/destination/update/${id}`} >
                                <p className="destination__comment--button">Update Review</p>
                            </NavLink>
                        </p>
                        <p className="destination__comment--text">Created By: {chosenDestination.name}</p>
                        <p className="destination__comment--text">Created On: {chosenDestination.dateCreated}</p>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Destination;