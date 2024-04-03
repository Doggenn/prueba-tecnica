import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Cards from './components/Cards'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  

  return (
    <>
      <Router>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Cards></Cards>} />
          <Route path='/:id' element={<Card></Card>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
