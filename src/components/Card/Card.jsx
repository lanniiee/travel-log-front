import "./Card.scss";

const Card = ({destination, size}) => {

    const {name, image, location, cost, visit, dateFrom, dateTo} = destination;

    return (
        <div className={"card-" + size}>
            <img src={image} alt={location} className={`card-${size}__image`}/>
            <div className={`card-${size}__info`}>
                <h1 className={`card-${size}__info--location`}>{location}</h1>
                <p className={`card-${size}__info--text`}><span className={`card-${size}__title`}>Cost:</span> {cost}</p>
                <p className={`card-${size}__info--text`}><span className={`card-${size}__title`}>Places to visit:</span> {visit}</p>
                <p className={`card-${size}__info--text`}><span className={`card-${size}__title`}>Date travelled from:</span> {dateFrom}</p>
                <p className={`card-${size}__info--text`}><span className={`card-${size}__title`}>Dated travelled to:</span> {dateTo}</p>
                <p className={`card-${size}__info--text`}><span className={`card-${size}__title`}>Name:</span> {name}</p>
            </div>
        </div>
    )

}

export default Card;