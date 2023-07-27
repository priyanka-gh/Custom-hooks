import React,{useState, useEffect} from 'react'

export const useMousePosition = () => {
  const [ pos, setPos] = useState({
    x: 0,
    y: 0
  })


  useEffect(() => {
    const handleMouse = (event) => {
      setPos({x: event.clientX, y: event.clientY})
  }

    window.addEventListener("mousemove", handleMouse)

    console.log(pos)
    return () => {
      window.removeEventListener('mousemove', handleMouse)
    }

  },[])

  return pos;
}
