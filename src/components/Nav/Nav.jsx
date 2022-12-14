import { NavLink } from "react-router-dom";
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
                <NavLink to={"/"} className="nav__links--home">
                    <h4 className="nav__link">Home</h4>
                </NavLink>
                <hr />
                <NavLink to={"/destinations"} className="nav__links--destinations">
                    <h4 className="nav__link">Destinations</h4>
                </NavLink>
                <hr />
                <NavLink to={"/upload/destination"} className="nav__links--upload">
                    <h4 className="nav__link">Upload Destination</h4>
                </NavLink>

            </div>
        </div>
    )
}

export default Nav;