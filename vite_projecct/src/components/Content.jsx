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

const Content = () => {
  return (
    <main> 
        <h1 /* style= { {backgroundColor:"red", color:"white"} }*/ style = {headingStyle}> Main Content</h1>
        <Button>Click Me</Button>
        <NewButton>Click Me 2</NewButton>
    </main>
  )
}

export default Content
