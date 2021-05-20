import React from "react";



const FunctionButton = (props) => {

    return (
        <button type="button" className="btn btn-primary btn-lg m-3" id={props.props.id} name={props.props.name} >{props.props.value}</button>
          )
}
export default FunctionButton;