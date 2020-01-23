import React, {useState, useEffect} from "react";
import ImagePage from "./assets/components/ImageContainer/ImagePage";
// import Image from "./assets/components/ImageContainer/Image";
import axios from "axios";
import uuid from "react-uuid";
import "./App.css";

function App() {
  const [nasaImages, setNasaImages] = useState([]);
  // const now = new Date()  
  // const secondsSinceEpoch = Math.round(now.getTime() / 1000) 

  useEffect(() => {
      axios
          .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
          .then(response => {
              console.log("NASA",response.data);
              setNasaImages(response.data)
          })
          .catch(error => {
              console.log('The data was not taken', error);
          });
  }, []);
  // console.log(secondsSinceEpoch)
  return (
    <div className="App">
      <ImagePage 
        // key={secondsSinceEpoch}
        key={uuid()}
        url={nasaImages.url}
        explanation={nasaImages.explanation}
        />
        {console.log('nasa', nasaImages.url)}
    </div>
  )
}
  

export default App;
