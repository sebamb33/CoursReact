"use client"
import { useState } from "react"
const jeu = () => {
  const [number, setNumber] = useState(0);
  const increment = ()=>
  {
    alert('vous avez cliquer sur le bouton')
    setNumber(number + 1)
  }
  return (
    <>
    <div>
      {number}
    </div>
    <button onClick={() => increment()}>Increment</button>
    </>
  )
}

export default jeu;
