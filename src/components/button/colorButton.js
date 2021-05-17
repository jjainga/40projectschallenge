import React, {useState, useEffect} from "react";



const ColorButton = (props) => {
  
    console.log(props)
    return (
        <button type="button" class="btn btn-primary btn-lg m-3" id={props.props.id}>{props.props.color}</button>
          )
}
export default ColorButton;