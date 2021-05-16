import React, {useState, useEffect} from "react";
import API from "../utilities/API";
import Title from "../components/jumbo/title"
import Card from "../components/colorCard/colorCard"


const ColorFlip = () => {

    const [colorState, setColorState] = useState({
        color: "Red",
        id: "F2242F",
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
    },[] )
    
    async function getColor() {
        let {data} =  await API.searchColor(colorState.id, colorState.mode, colorState.count)
        
        setColorArrayState(data)
    }
    
    console.log(colorArrayState.colors);
      return (
          <div>
              <Title props={colorFlipState} />
              <div className="container">
                  <div className="row">
                    <div className="col-12">
                        <h1>All the shades of {colorState.color}!</h1>
                    </div>
                    <hr />
                  </div>
                  <div className="row">
                    {colorArrayState.colors != undefined ?
                    colorArrayState.colors.map(colorObj => 
                    <Card props={colorObj} />
                    ) : null}
                  </div>
              </div>
          </div>
      )
}

export default ColorFlip;