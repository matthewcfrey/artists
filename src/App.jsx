import { useState } from 'react'
import './App.css'
import Customers from './component/Customers'
import Artists from './component/Artists'

function App() {

  return (
    <div>
      <Artists />
      <Customers />
    </div>
  )
}

export default App
