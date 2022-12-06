import "./Card.scss";

const Card = ({destination}) => {

    const {name, image, location, cost, visit, dateFrom, dateTo} = destination;

    return (
        <div className="card">
            <img src={image} alt={location}  className={"card__image " + location}/>
            <div className="card__info">
                <h1 className="card__info--location">{location}</h1>
                <p className="card__info--text"><span className="card__title">Cost:</span> {cost}</p>
                <p className="card__info--text"><span className="card__title">Places to visit:</span> {visit}</p>
                <p className="card__info--text"><span className="card__title">Date travelled from:</span> {dateFrom}</p>
                <p className="card__info--text"><span className="card__title">Dated travelled to:</span> {dateTo}</p>
                <p className="card__info--text"><span className="card__title">Name:</span> {name}</p>
            </div>
        </div>
    )

}

export default Card;