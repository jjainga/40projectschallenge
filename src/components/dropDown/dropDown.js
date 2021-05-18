import React, {useState,useEffect} from "react";



const DropDown = (props) => {

  const [dropState, setDropState] = useState();

  async function setProps() {
      let data = await props.props
      setDropState(data)
  }
  useEffect( () => {
    setProps()
  },[props])
    
    
    console.log(props)
    return (
        <div className="btn-group dropright">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Change Mode
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {props.props.map(obj => 
                     <button className="dropdown-item" id={obj} onClick={props.changeMode}>{obj}</button>)}
            </div>
        </div>
          )
}
export default DropDown;
