import "./Nav.scss";

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__heading">
                <h1 className="nav__heading--title">THE </h1>
                <h1 className="nav__heading--title script"> Travel </h1>
                <h1 className="nav__heading--title">GUIDE</h1>
            </div>

            <div className="nav__links">
                <h4 className="nav__link">Home</h4>
                <hr />
                <h4 className="nav__link">Destinations</h4>
                <hr />
                <h4 className="nav__link">Reviews</h4>
                <hr />
                <h4 className="nav__link">Upload Reviews</h4>
            </div>
        </div>
    )
}

export default Nav;