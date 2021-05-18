import React, {useState,useEffect} from "react";



const ColorButton = (props) => {

  const [buttonState, setButtonState] = useState();

  useEffect( () => {
    setButtonState(props.props)
  },[props])
    
    
    console.log(buttonState)
    return (
        <button type="button" class="btn btn-primary btn-lg m-3" id={props.props.id} name={props.props.color} onClick={props.changeColor} >{props.props.color}</button>
          )
}
export default ColorButton;
