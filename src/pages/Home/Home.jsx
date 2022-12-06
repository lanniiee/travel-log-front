import "./Home.scss";
import { homeIntro } from "../../utils/home.js"
import Card from "../../components/Card/Card";

const Home = ({destination}) => {

    return (
        <div className="home">
            <div className="home__heading">
                <hr className="home__divider--top"/>
                <h1 className="home__heading--title">{homeIntro.title}</h1>
                <p className="home__heading--subheading">{homeIntro.intro}</p>
                <hr className="home__divider--bottom"/>
            </div>
            <Card destination={destination} size="big" />
        </div>
    )
}

export default Home;