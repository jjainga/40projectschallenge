import React from "react";



const CountButton = (props) => {

 
    console.log(props.props)
    return (
        <button type="button" className="btn btn-primary btn-lg m-3" id={props.props.id} name={props.props.name} onClick={props.count}>{props.props.value}</button>
          )
}
export default CountButton;
