import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import 'rbx/index.css'
import Main from './components/Main'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}


