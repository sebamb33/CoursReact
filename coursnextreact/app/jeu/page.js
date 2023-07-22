"use client"
import { useState,useEffect } from "react"
const jeu = () => {
  const [number, setNumber] = useState(0);
  const increment = ()=>
  {
    alert('vous avez cliquer sur le bouton')
    setNumber(number + 1)
  }
  const decrement = ()=>
  {
    alert('vous avez cliquer sur le bouton')
    setNumber(number - 1)
  }
  useEffect(()=>{
    return () =>
    {
        console.log('Le composant est démonté')
    }
  },[number])
  return (
    <>
    <div>
      {number}
    </div>
    <button onClick={() => increment()}>Increment</button>
    <button onClick={() => decrement()}>Decrement</button>
    </>
  )
}

export default jeu;
