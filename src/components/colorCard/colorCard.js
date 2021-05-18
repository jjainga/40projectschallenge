import React, {useState, useEffect} from "react";



const ColorCard = (props) => {

    return (
                <div className="card col-3 m-.5" display="inline-block">
                    <img className="card-img-top" src={props.props.image.named} id={props.props.hex.value} alt={props.props.name.value} onClick={props.changeBackground} />
                    <div className="card-body">
                        <p className="card-text">hex value: {props.props.hex.value}</p>
                    </div>
            </div>
          )
}
export default ColorCard;