import React, {useState, useEffect} from "react";
import Title from "./jumbo/title"
import NumberButton from "./button/numberButton"


const Counter = () => {

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

    // const [charState, setCharState] = useState = ([
    //     {
    //         character: ".",
    //         name: "decimal"
    //     },
    //     {
    //         character:"#",
    //         name: "pound"
    //     },
    //     {
    //         character: "^",
    //         name: "circumflex"
    //     },
    //     {
    //         character:"%",
    //         name: "percent"
    //     }
    // ])
    const [displayState, setDisplayState] = useState()
    useEffect( () => {
       filterZero()
    },[])

    const filterZero = async () => {
        const numbers = await numberState.filter( obj => obj.int > 0)
        console.log(numbers)
        setWholeNumState(numbers)
    }
    
    return(
        <div>
            <Title props={calculatorMessState} />
            <div className="container mx-auto" style={{width: '500em'}}>
                
                    <div className="row ">
                        <input className="" value={displayState}>{displayState}</input>
                    </div>
                    <div className="row ">
                        <div className="col-3">
                            <div className="d-table-row">
                                {
                                    wholeNumState != undefined ?
                                        wholeNumState.map(obj => <NumberButton props={obj} />)
                                        :null
                                }
                            </div>
                            
                        </div>
                        <div className="col-4">

                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Counter;