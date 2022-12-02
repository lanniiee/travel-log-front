import "./Background.scss";
import {clouds} from "../../data/clouds";

const Background = () => {

    const croudArr = clouds.map(cloud => {
        return (
                <img 
                    src={cloud.image_url} 
                    alt="cloud" 
                    className={"background__cloud cloud" + cloud.id} 
                    key={cloud.id}
                    />
        )
    });

    return (
        <div className="background">
            <div className="background__overlay">
                {croudArr}
            </div>
        </div>
    )
}

export default Background;