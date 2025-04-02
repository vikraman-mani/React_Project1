import React from 'react'
import styled from 'styled-components'

let headingStyle = {
    backgroundColor:"red",
    color:"white"
}

let Button = styled.button`
    background-color: red;
    color: white;
    border-radius: 5px;
    padding: 10px;
`
// Button re-usable 
let NewButton = styled(Button)`
    background-color: blue;
`
function handleClick(e) {
    console.log(e.target.innerText)
}

function handleClick2(evt) {
    console.log(evt.target.innerText)
}

const Content = () => {
  return (
    <main> 
        <h1 /* style= { {backgroundColor:"red", color:"white"} }*/ style = {headingStyle}> Main Content</h1>
        <Button onClick={ handleClick } >Click Me</Button>
        <NewButton onClick={ (e) => { handleClick2(e) } }>Click Me 2</NewButton>
    </main>
  )
}

export default Content
