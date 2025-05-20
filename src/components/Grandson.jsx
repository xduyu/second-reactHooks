import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

function Grandson() {
  return (
    <div>theme now in Grandson is: {useContext(ThemeContext)}</div>
  )
}

export default Grandson