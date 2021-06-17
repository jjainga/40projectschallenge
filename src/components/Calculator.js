import React, {useState, useEffect} from "react";
import Title from "./jumbo/title"
import NumberButton from "./button/numberButton"
import CharButton from "./button/charButton"
import FunctionButton from "./button/functionButton"


const Calculator = () => {

    const [calculatorMessState] = useState({
        title: "Add, Subtract, Multiply and Divide!!",
        message: "Need to do math but dont want to do it by hand? Well here you go!"
    })

    const [functionState] = useState ([
        {
            name:"subtraction",
            value: "-",
            id: "subtract"
        },
        {
            name:"addition",
            value: "+",
            id: "add"
        },
        {
            name:"multiplication",
            value: "*",
            id: "multiply"
        },
        {
            name:"division",
            value: "/",
            id: "divide"
        },
        {
            name:"equals",
            value: "=",
            id: "equals"
        }
    ])
    const [numberState, setNumberState] = useState([
        {
            number: "one",
            int: 1
        },
        {
            number: "two",
            int: 2
        },
        {
            number: "three",
            int: 3
        },
        {
            number: "four",
            int: 4
        },
        {
            number: "five",
            int: 5
        },
        {
            number: "six",
            int: 6
        },
        {
            number: "seven",
            int: 7
        },
        {
            number: "eight",
            int: 8
        },
        {
            number: "nine",
            int: 9
        },
        {
            number: "zero",
            int: 0
        }
    ])
    const [wholeNumState, setWholeNumState] = useState();

    const [charState, setCharState] = useState([
        {
            character: ".",
            name: "decimal"
        },
        {
            character:"#",
            name: "pound"
        },
        {
            character: "^",
            name: "circumflex"
        },
        {
            character:"%",
            name: "percent"
        }
    ])
    const [displayState, setDisplayState] = useState({
        first: [],
        symbol: '',
        second: []
    })
    useEffect( () => {
       filterZero()
    },[])

    const filterZero = async () => {
        const numbers = await numberState.filter( obj => obj.int > 0)
        // console.log(numbers)
        setWholeNumState(numbers)
    }
    const enterDisplay = async (e) => {
        if(displayState.first !== [] && displayState.symbol !== '') {
            let newArr = displayState.first.concat(e.target.value)
            setDisplayState({second: newArr})

        } else {
            let newArr = displayState.first.concat(e.target.value)
            setDisplayState({first: newArr})
        }
    }
    const enterFunction = async (e) => {
        let char = displayState.symbol.concat(e.target.value)
            setDisplayState({symbol: char})
    }

    // const calculate = () => {
    //     switch
    // }

    return(
        <div>
            <Title props={calculatorMessState} />
            <div className="container mx-auto" style={{width: '500em'}}>
                
                    <div className="row col-12 mx-auto">
                        <input className="input-group-text" placeholder="00"  onChange={enterDisplay} value={displayState.arr.join("")}></input>
                    </div>
                    <div className="row ">
                        <div className="col-3">
                            <div className="d-table-row">
                                {
                                    wholeNumState != undefined ?
                                        wholeNumState.map(obj => <NumberButton props={obj} enterDisplay={enterDisplay} />)
                                        :null
                                }
                                <CharButton character={charState[0].character} name={charState[0].name} />
                                <NumberButton props={numberState[9]} />
                                <CharButton character={charState[1].character} name={charState[1].name} />
                            </div>
                            
                        </div>
                        <div className="col-1">
                               {functionState.map( obj => <FunctionButton props={obj} enterDisplay={enterDisplay} /> )} 
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Calculator;