import React from "react";



const NumberButton = (props) => {

    return (
        <button type="button" className="btn btn-primary btn-lg m-3" id={props.props.int} name={props.props.number} value={props.props.int} onClick={props.enterDisplay}>{props.props.int}</button>
          )
}
export default NumberButton;