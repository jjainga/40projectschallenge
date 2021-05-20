import React from "react";



const CharButton = (props) => {

    return (
        <button type="button" className="btn btn-primary btn-lg m-3" id={props.name} name={props.name} >{props.character}</button>
          )
}
export default CharButton;