import "./Destinations.scss";
import CardList from "../../components/CardList/CardList";
import Searchbox from "../../components/Searchbox/Searchbox";
import { useState } from "react";


const Destinations = ({allDestinations}) => {
    const [searchValue, setSearchValue] = useState("");

    const filteredLocation = allDestinations.filter(destination => destination.location.toLowerCase().includes(searchValue.toLowerCase()));

    console.log(filteredLocation)
    
    const handleInput = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className="destinations">
            <div className="destination__searchbox">
                <Searchbox handleInput={handleInput} searchValue={searchValue} />
            </div>
            <CardList destinations={filteredLocation} size="small" />
        </div>
    )
}

export default Destinations;