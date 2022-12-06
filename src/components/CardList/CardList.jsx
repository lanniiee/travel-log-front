import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = ({destinations, size}) => {

    console.log(destinations);

    return (
        <div className="cardList">
            {destinations.map(destination => (
                <Link key={destination.id} to={`/destination/${destination.id}`} className="cardList__card">
                    <Card destination={destination} size={size}/>
                </Link>
            ))}
        </div>
    )

}

export default CardList;