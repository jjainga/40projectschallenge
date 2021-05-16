import React, {useState, useEffect} from "react";



const Title = (props) => {
  
  const [titleState, setTitleState] = useState({
    title: "",
    message: ""
  });

  async function pageInfo() {
    console.log(props)
    let x = await props.props.title
    let y = await props.props.message
    setTitleState({title: x, message: y})
  }

  useEffect(() => {
    pageInfo();
},[])

  console.log(props)
    return (
      <div class="jumbotron">
        <h1 class="display-4">{titleState.title}</h1>
          <p class="lead">{titleState.message}</p>
        <hr class="my-4" />
    </div>
   
    )
}
export default Title;