import "./Card.scss";

const Card = (props) => {
    const {} = props;

    return (
        <div className="card">
            <img src={""} alt={"location"}  className={"card__image "}/>
            <div className="card__info">
                <h1 className="card__info--location">Location: </h1>
                <p className="card__info--text">Cost: </p>
                <p className="card__info--text">Places to visit: </p>
                <p className="card__info--text">Date travelled from: </p>
                <p className="card__info--text">Dated travelled to: </p>
            </div>
        </div>
    )

}

export default Card;