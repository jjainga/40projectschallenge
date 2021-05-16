import React, {useState, useEffect} from "react";
import API from "../utilities/API";
import Title from "../components/jumbo/title"


const ColorFlip = () => {

    const [colorState, setColorState] = useState({
        color: "F2242F",
        mode: "monochrome",
        count: "20",
        
    })
    const [colorFlipState, setColorFlipState] = useState({
        title: "Color Flip",
        message: "Click a button and see what happens! hopefully you like something colorful!"
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
              <Title props={colorFlipState} />
              <p>Hello world</p>
          </div>
      )
}

export default ColorFlip;