import { fetchHelloWorld } from "./fetch/fetch-hello-world"
import { useState, useEffect } from "react";

function App() {

  const [text, setText] = useState<string | null>(null);


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
        <p>Nothing</p>
      </div>
        
    </>
  )
}

export default App
