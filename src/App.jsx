import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import { Token } from './resources/token.context'
import Home from './pages/Home'
import Transaction from './pages/Transaction'

function App() {

  const [token, setToken] = useState('')

  return (
    <Token.Provider value = {[token, setToken]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/nova-transacao/:tipo' element={<Transaction/>}></Route>
        </Routes>
      </BrowserRouter>
    </Token.Provider>
  )
}

export default App
