import React, {useState,useEffect} from "react";



const ColorButton = (props) => {

  const [buttonState, setButtonState] = useState();

  async function setProps() {
    let data = await props.props
    setButtonState(data)
}
  useEffect( () => {
    setProps()
  },[props])
    
    
    console.log(buttonState)
    return (
        <button type="button" class="btn btn-primary btn-lg m-3" id={props.props.id} name={props.props.color} onClick={props.changeColor} >{props.props.color}</button>
          )
}
export default ColorButton;
