import React from "react";



const CharButton = (props) => {

 
    console.log(props.props)
    return (
        <button type="button" className="btn btn-primary btn-lg m-3" id={props.props.name} name={props.props.name} >{props.props.character}</button>
          )
}
export default CharButton;