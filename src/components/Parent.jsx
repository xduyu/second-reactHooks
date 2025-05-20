import React, { useContext } from 'react'
import ThemeContext from './Context'
import Child from './Child'

function Parent() {
    let theme = useContext(ThemeContext)
  return (
    <div>
        theme now is: {useContext(ThemeContext)}
        <Child></Child>
    </div>
  )
}

export default Parent