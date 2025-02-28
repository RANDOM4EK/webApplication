import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/Header'
import EditMood from './component/editMood/EditMood'

function App() {
  return(
    <>
    <Header/>
    <EditMood/>
    </>
  )
}

export default App
