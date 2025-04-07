import { fetchHelloWorld } from "./fetch/fetch-hello-world"

function App() {

  const fetchData = async () => {
    try {
      const data = await fetchHelloWorld();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData()

  return (
    <>
      <div>
        <p>Some text</p>
      </div>
        
    </>
  )
}

export default App
