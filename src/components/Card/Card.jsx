import "./Card.scss";

const Card = ({destination}) => {

    const {name, image, location, cost, visit, dateFrom, dateTo} = destination;

    return (
        <div className="card">
            <img src={image} alt={location}  className={"card__image " + location}/>
            <div className="card__info">
                <h1 className="card__info--location">Location: {location}</h1>
                <p className="card__info--text">Cost: {cost}</p>
                <p className="card__info--text">Places to visit: {visit}</p>
                <p className="card__info--text">Date travelled from: {dateFrom}</p>
                <p className="card__info--text">Dated travelled to: {dateTo}</p>
                <p className="card__info--text">Name: {name}</p>
            </div>
        </div>
    )

}

export default Card;