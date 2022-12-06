import "./Destinations.scss";
import CardList from "../../components/CardList/CardList";
import { useState } from "react";
import { useEffect } from "react";


const Destinations = () => {
    const [allDestinations, setAllDestinations] = useState([]);


    const getAllDestinations = async () => {
        const url = "http://localhost:8080/destinations";
        const response = await fetch(url);
        const data = await response.json();
        setAllDestinations(data);
    }

    useEffect(()=> {
        getAllDestinations();
    }, [])


    return (
        <div className="destinations">
            <CardList destinations={allDestinations} />
        </div>
    )
}

export default Destinations;