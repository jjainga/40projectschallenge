import React, {useState, useEffect} from "react";



const ColorCard = (props) => {
    console.log(props)
    // console.log(cardState)
    return (
                <div className="card col-3 m-.5" display="inline-block">
                    <img className="card-img-top" src={props.props.image.named} alt={props.props.name.value}/>
                    <div className="card-body">
                        <p className="card-text">hex value: {props.props.hex.value}</p>
                    </div>
            </div>
          )
}
export default ColorCard;