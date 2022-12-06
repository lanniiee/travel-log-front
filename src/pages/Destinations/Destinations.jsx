import "./Destinations.scss";
import CardList from "../../components/CardList/CardList";


const Destinations = ({allDestinations}) => {

    return (
        <div className="destinations">
            <CardList destinations={allDestinations} size="small" />
        </div>
    )
}

export default Destinations;