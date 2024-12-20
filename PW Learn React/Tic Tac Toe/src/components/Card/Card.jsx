import Icon from "../Icon/Icon.jsx";
import './Card.css';
import '../Grid/Grid.css';
function Card({ player, onPlay, index }) {
    
    let icon = <Icon />;
    if (player == "X") {
        icon = <Icon name="cross" />;
    } else if (player == "O") {
        icon = <Icon name="circle" />;
    }
    return (
        <div className="card" onClick={() => onPlay(index)}>
            {icon}
        </div>)
}

export default Card;