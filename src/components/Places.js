import React from "react"

export default function Places(props) {
    console.log(props.item)
    return (
        <div className="places--container">
            <img src={`../images/${props.item.img}`} className="places--image"/>
            <div>
            <div className="places--description">
                <div className="places--location">
                    <img src="../images/cursor.png" className="places--cursor" />
                    <h4>{props.item.location}</h4>
                    <a className="places--url" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>    
                  <h2>{props.item.title}</h2>
                  <h5>{props.item.startDate} - {props.item.endDate}</h5>
                  <p className="places--text">{props.item.description}</p>
                  
            </div>
            <hr/>
            </div>
        </div>
    )
}

