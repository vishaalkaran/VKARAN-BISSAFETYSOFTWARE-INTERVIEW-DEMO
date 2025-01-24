import React, { useEffect, useState } from "react"; // Explicit Import React
import CompanyList from "./components/CompanyList.js";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/data")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  return (
    <div className="App">
      {/* <h1>React and Laravel Integration</h1>
      <h3>A!</h3>

      {data ? <p>{data.message}</p> : <p>Loading...</p>} */}
      <div>
        <CompanyList />
      </div>
    </div>
  );
}

export default App;
