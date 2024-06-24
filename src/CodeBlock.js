import { useState, useEffect } from 'react'
export default function CodeBlock ({ typeFunction, code }) {
  const [coded, setCoded] = useState('')
  useEffect(() => {
    let i = code.substring(coded.length + 1, code.length).indexOf('\n');
    let flip = false;
    const interval = setInterval(() => {
      //i = i % 2 ? i + 1 : i + 10
      if (!typeFunction) typeFunction = (i, code) => Math.random() > 0.45
        ? i + 1
        : code.substring(coded.length + 1, code.length).indexOf('\n') + i

      i =  typeFunction(i, code)

      setCoded(code.substring(0, i))
      
    }, 100) 
    return () => {
      clearInterval(interval)
    }
  }, [])
  return <pre className="Code-block">{coded}</pre>
}
