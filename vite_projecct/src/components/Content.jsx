// React Arrow Function Component
// rafc

// import React from 'react'

// export const Content = () => {
//   return (
//     <div>Content</div>
//   )
// }


//rafce 

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
function handleClick() {
    alert("Button Clicked")
}

function handleClick2(user) {
    alert("Button 2 Clicked " + user)
}

const Content = () => {
  return (
    <main> 
        <h1 /* style= { {backgroundColor:"red", color:"white"} }*/ style = {headingStyle}> Main Content</h1>
        <Button onClick={ handleClick } >Click Me</Button>
        <NewButton onClick={ () => { handleClick2("Vikraman") } }>Click Me 2</NewButton>
    </main>
  )
}

export default Content
