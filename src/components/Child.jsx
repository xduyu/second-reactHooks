import React, {useContext} from 'react'
import ThemeContext from './Context'
import Grandson from './Grandson'

function Child() {
  return (
    <div>theme now in child is: {useContext(ThemeContext)}
    <Grandson></Grandson>
    </div>
  )
}

export default Child