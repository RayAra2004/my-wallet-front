import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import { Token } from './resources/token.context'

function App() {

  const [token, setToken] = useState('')

  return (
    <Token.Provider value = {[token, setToken]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
      </BrowserRouter>
    </Token.Provider>
  )
}

export default App
