import React from "react";
import Navigate from "./Nav/navigate"
import Title from "./jumbo/title"

const Home = () => {


return (
    <div>
        <Navigate />
        <Title />
        <p>Hello World</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfnemlZq5EQZwF6_OfyMTIX3zM8vIfdOAUEw&usqp=CAU"  alt="logo" />
    </div>
    )
}

export default Home;
