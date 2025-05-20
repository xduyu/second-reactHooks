import { useState } from 'react'
import './App.css'
import Switch from './components/switch'
import Counter from './components/Counter'
import Products from './components/Products'
import Parent from './components/Parent'
import ThemeContext from './components/Context'

function App() {
  const theme = "dark";
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Parent></Parent>
      </ThemeContext.Provider>
    </>
  )
}

export default App
