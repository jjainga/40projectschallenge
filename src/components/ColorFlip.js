import React, {useState, useEffect} from "react";
import API from "../utilities/API";


const ColorFlip = () => {

    const [colorState, setColorState] = useState({
        color: "F2242F",
        mode: "monochrome",
        count: "20",
        
    })
    const [colorArrayState, setColorArrayState] = useState({})

    useEffect(() => {
        getColor()
        console.log(colorArrayState);
      },[] )

      async function getColor() {
        let {data} =  await API.searchColor(colorState.color, colorState.mode, colorState.count)
        
        setColorArrayState(data)
      }

      return (
          <div>
              <p>Hello world</p>
          </div>
      )
}

export default ColorFlip;