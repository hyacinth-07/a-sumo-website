import { fetchHelloWorld } from "./fetch/fetch-hello-world"
import { useState, useEffect } from "react";
import { Rikishi } from "./types/Rikishi";

function App() {

  // this should really be the proper type
  const [text, setText] = useState<Rikishi[] | null>(null); 

  useEffect(() => {

    try {
      fetchHelloWorld().then((data) => {
        setText(data);
      })
    } catch (error) {
      throw new Error(`${error}`)
    }

  }, []);


  // const list = text.map((item: any) =>  <li>{item.name}</li> )
  
  return (
    

    <>
      <div>
        <ul>
        {/* {text.map((item: any) => <li key={item.id}>{item.name}</li>)}    */}
        </ul>
      </div>
        
    </>
  )
}

export default App
