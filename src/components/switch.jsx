import React, { useState } from 'react'

function Switch() {
  const [isOn, setIson] = useState(false)
  return (
    <div>
        {/* <button onClick={()=>{setIson(!isOn)}}>{isOn ? "true" : "false"}</button> */}
    </div>
  )
  
}
export default Switch