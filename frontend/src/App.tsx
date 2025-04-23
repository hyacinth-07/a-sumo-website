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

const list = text?.map((elem: Rikishi)=> <li key={elem.id}>{elem.name}, {elem.age}</li>)

  return (
  <>
  <div>
    <h1>A list of strong men</h1>
    <ul>
      {list}
    </ul>
  </div>
  </>
  );
}

export default App
