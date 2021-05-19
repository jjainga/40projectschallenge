import React, {useState, useEffect} from "react";
import API from "../utilities/API";
import Title from "../components/jumbo/title"
import Card from "../components/colorCard/colorCard"
import Button from "../components/button/colorButton"
import DropDown from "../components/dropDown/dropDown"

document.getElementById('app')


const ColorFlip = () => {

    const [colorState, setColorState] = useState({
        color: "Red",
        id: "F2242F",
        mode: "monochrome",
        count: "20",
        
    });
    const [selectState] = useState(
        [
            {
                color: "Red",
                id: "F2242F"
            },
            {
                color: "Blue",
                id: "0000FF"
            },
            {
                color: "Green",
                id: "008000"
            }
    ]
    );

    const [modeState, setModeState] = useState(["monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement", "triad", "quad"]);
    const [colorFlipState] = useState({
        title: "Color Flip",
        message: "Click a button and see what happens! hopefully you like something colorful! This page uses thecolorapi.com for all the color images and hex codes"
    });
    const [colorArrayState, setColorArrayState] = useState({});

    useEffect(() => {
        getColor()
    },[colorState] )
    
    async function getColor() {
        let {data} =  await API.searchColor(colorState.id, colorState.mode, colorState.count)
        
        setColorArrayState(data)
    }
    
     const changeColor = (e) => {
        setColorState({ ...colorState, color : e.target.name, id : e.target.id})
    }

    const changeBackground = (e) => {
        document.body.style.background = e.target.id
    }
    const changeMode = (e) => {
        setColorState({ ...colorState, mode : e.target.id})
    }


    console.log(colorArrayState.colors);
      return (
          <div>
              <Title props={colorFlipState} />
              <div className="container">
                  <div className="row mx-auto">
                    {selectState.map(idObj => 
                        <Button props={idObj} changeColor={changeColor} />
                    )}
                    <DropDown props={modeState} changeMode={changeMode} />
                  </div>
                  <div className="row">
                    <div className="col-12">
                        <h1>All the shades of {colorState.color}!</h1>
                    </div>
                    <hr />
                  </div>
                  <div className="row">
                    {colorArrayState.colors != undefined ?
                    colorArrayState.colors.map(colorObj => 
                    <Card props={colorObj} changeBackground={changeBackground} />
                    ) : null}
                  </div>
              </div>
          </div>
      )
}

export default ColorFlip;