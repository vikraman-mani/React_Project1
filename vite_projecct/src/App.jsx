import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import { createContext, useState } from 'react'

export   let UserContext =  createContext()

function App() {

  let [user,setUser] = useState( {name: "John", age: 30} )
  
  return (
    <UserContext.Provider value = { {user} }>
      <div className='App'>
        <Header />
        <Content />
        <Footer />
     </div>
    </UserContext.Provider>

  )
}

export default App