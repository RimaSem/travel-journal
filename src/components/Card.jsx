import locationIcon from "../assets/location-icon.svg"

export default function Card(props) {
    return <div className="card">
        <img src={props.imageUrl}/>
        <div className="card--right">
            <div className="location">
                <img src={locationIcon} className="location--icon"/>
                <div className="location--name">{props.location.toUpperCase()}</div>
                <a href={props.googleMapsUrl} className="location--link">View on Google Maps</a>
            </div>
            <h2 className="title">{props.title}</h2>
            <p className="date">{props.startDate} - {props.endDate}</p>
            <p className="text">{props.description}</p>
        </div>
    </div>
}