import React from "react"


export default function Card (props) {
    console.log(props)
    return (
        
        <div className="card">
        <img src={`./images/${props.item.img}`} />
        <div className="card-content">
            <div className="location">
                <img className="pin-icon" src="./images/pin-icon.png" />
                <h3>{props.item.location}</h3>
                <a className="link" href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>
            
            <h2>{props.item.title}</h2>
            <p><span>{props.item.startDate}</span> - <span>{props.item.endDate}</span>
            </p>
            <p className="description">{props.item.description}</p>
        </div>
        
        
        
        </div>
    )
}