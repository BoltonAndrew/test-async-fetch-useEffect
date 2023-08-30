import { useState, useEffect } from "react";
import "./App.css";

// https://pokeapi.co/api/v2/

function App() {
  const [data, setData] = useState();

  useEffect(function () {
    grabData();
  }, []);

  // async keyword tells JS that this function can use the await keyword
  async function grabData() {
    // fetch is used to grab data from other locations, mostly other web services.
    // fetch returns a Promise, which is a class that basically says "I will return data soon"
    // await keyword is used with Promise returning functions to tell JS to wait until the Promise is fulfilled
    // "https://www.ncei.noaa.gov/access/services/data/v1?dataset=global-summary-of-the-year&dataTypes=DP01,DP05,DP10,DSND,DSNW,DT00,DT32,DX32,DX70,DX90,SNOW,PRCP&stations=ASN00084027&startDate=1952-01-01&endDate=1970-12-31&includeAttributes=true&format=json"
    const response = await fetch(
      "https://www.ncei.noaa.gov/access/services/data/v1?dataset=global-summary-of-the-year&dataTypes=DP01,DP05,DP10,DSND,DSNW,DT00,DT32,DX32,DX70,DX90,SNOW,PRCP&stations=ASN00084027&startDate=1952-01-01&endDate=1970-12-31&includeAttributes=true&format=json"
    );
    // .json() is a method built into the return value of fetch, it grabs the JSON data from the response.
    const converted = await response.json();
    console.log(converted);
    setData(converted);
    // async function nicheData(url) {
    //   const response = await fetch(url);
    //   const converted = await response.json();
    //   return converted;
    // }
    // console.log(await nicheData(converted.berry));
  }

  return (
    <div className="App">
      <h1>Fetch, Async & useEffect</h1>
      {data && <p>{data}</p>}
      <button onClick={grabData}>Fetch Data</button>
    </div>
  );
}

export default App;
