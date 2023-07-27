import React,{useState, useEffect} from 'react'

export const useScroll = () => {
  const [ pos, setPos] = useState({
    x: 0,
    y: 0
  })
  useEffect(() => {
    const handleScroll = () => {
        setPos({x: window.scrollX, y: window.scrollY})
    }
  
    window.addEventListener("scroll", handleScroll)

    console.log(pos)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  },[])

  return pos;
}
