import React, { use, useEffect, useState } from 'react'

function Products() {
    const [orange, setOrange] = useState(5)
    const [apple, setApple] = useState(2)

    useEffect(() => {
        console.log(`orange's count has changed to: ` + orange)
    }, [orange])

  return (
    <div>
        <h3>Orange: {orange} <button onClick={() => {setOrange(orange+1)}}>add orange</button></h3>
        <h3>Apple:{apple} <button onClick={() => {setApple(apple+1)}}>add apple</button></h3>
    </div>
  )
}

export default Products