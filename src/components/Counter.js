import React, {useState, useEffect} from "react";
import Title from "./jumbo/title"
import CountButton from "./button/countButton"


const Counter = () => {

    const [countMessState] = useState({
        title: "Counter!",
        message: "Count up, Count down! The choice is yours!"
    })

    const [actionState] = useState ([
        {
            name:"minus",
            value: "-",
            id: "subtract"
        },
        {
            name:"plus",
            value: "+",
            id: "add"
        }
    ])
    const [countState, setCountState] = useState(0)
    useEffect( () => {
        setCountState( parseInt(localStorage.getItem("counter")))
    },[])

    const count = (e) => {
        let counter = countState
        switch(e.target.id) {
            case "add" :
                let counts = counter + 1
                setCountState(counts)
                localStorage.setItem("counter", counts)
                break;
            case "subtract" :
                let counted = counter - 1
                setCountState(counted)
                localStorage.setItem("counter", counted);
                break;
            default:
        }
    }

    return(
        <div>
            <Title props={countMessState} />
            <div className="container ">
                
                    <div className="row d-table-row">
                        <span className="" id={countState}>{countState}</span>
                    </div>
                    <div className="row d-table-row">
                        {actionState.map( obj => <CountButton props={obj} count={count}/>)}
                    </div>
            </div>
        </div>
    )
}

export default Counter;