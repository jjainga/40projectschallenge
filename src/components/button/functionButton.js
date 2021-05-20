import React from "react";



const FunctionButton = (props) => {

 
    console.log(props.props)
    return (
        <button type="button" className="btn btn-primary btn-lg m-3" id={props.props.int} name={props.props.number} >{props.props.int}</button>
          )
}
export default FunctionButton;