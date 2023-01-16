import locationIcon from "../assets/location-icon.svg"

export default function Card(props) {
    return <div className="card">
        <img src="https://source.unsplash.com/WLxQvbMyfas"/>
        <div className="card--right">
            <div className="location">
                <img src={locationIcon} className="location--icon"/>
                <div className="location--name">JAPAN</div>
                <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" className="location--link">View on Google Maps</a>
            </div>
            <h2 className="title">Mount Fuji</h2>
            <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
            <p className="text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
    </div>
}