import { useEffect } from "react"
import { fetchApi } from "./API_Service/api"


function App() {

  useEffect(() => {
    testapi();
  },[]);

const testapi = ( ) => {
  fetchApi("/movie/popular")
  .then((res) => {
    console.log(res);
  })
}

  return (
    <>

    </>
  )
}

export default App
