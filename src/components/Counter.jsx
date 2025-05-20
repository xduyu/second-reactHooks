import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    // без зависимостей 
    
    // useEffect(() => {
    //     console.log('Show component: ' + count)
    // })

    // Пустой массив зависимостей

    useEffect(() => {
        console.log('Show component: ' + count)
    }, [])

  return (
    <div>
        {/* <div className="">{count}</div>
        <button onClick={() => {setCount(count+1)}}>add</button> */}
    </div>
  )
}

export default Counter