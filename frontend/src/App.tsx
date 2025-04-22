import { fetchHelloWorld } from "./fetch/fetch-hello-world"
import { useState, useEffect } from "react";

function App() {

  // this should really be the proper type
  const [text, setText] = useState<any | null>(null); 


  useEffect(() => {

    try {
      fetchHelloWorld().then((data) => {
        setText(data);
      })
    } catch (error) {
      throw new Error(`${error}`)
    }

  }, []);


  return (

    <>
      <div>
        {text}
      </div>
        
    </>
  )
}

export default App
