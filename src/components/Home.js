import React, {useState, useEffect} from "react";
import Title from "./jumbo/title"

const Home = () => {

    const [homeState, setHomeState] = useState({
        title: "#40ProjectChallenge",
        message: "As as get back into the swing of coding, I will be working on 40 projects that will be posted on this app! Wish me luck!"
    })

return (
    <div>
        <Title props={homeState} />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfnemlZq5EQZwF6_OfyMTIX3zM8vIfdOAUEw&usqp=CAU"  alt="logo" />
    </div>
    )
}

export default Home;
