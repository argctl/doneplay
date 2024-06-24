import { useEffect, useState } from 'react'
export default function Image ({ src, alt, AnimationDelay }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true) 
    }, AnimationDelay)
  }, [])
  return show ? <div className="Img-block"><img width="auto" height="auto" src={src} alt={alt} /></div> : <div />
}
