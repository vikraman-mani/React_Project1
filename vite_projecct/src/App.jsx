import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {

  let user = "vikraman"

  return (
    <div className='App'>
      <Header user = {user} />
      <Content />
      <Footer user = {user} />
    </div>
  )
}

export default App