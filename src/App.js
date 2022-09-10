import { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { FaCloud } from "react-icons/fa";


function App() {

  const [city, setCity] = useState("")
  const [cityId, setCityId] = useState()
  const [data, setData] = useState([])


  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7afcfde6057fac6b1fed87b8ed93729d`

  const handleChange = (e) => {
    setCityId(e.target.value)
  }
  const onSubmit = () => {
      setCity(cityId)


      fetch(API)
        .then((obj) => obj.json())
        .then((res) => setData([
          {
            name: res.name,
            temp: res.main.temp,
            weather: res.weather,
            wind: res.wind


          }]
        ))

    }
  

  return (
    <>
      <form className="inp-field">
        <input placeholder="Country,City,Region" value={cityId} onChange={handleChange} onKeyPress={onSubmit} />
        <button type='button' onClick={onSubmit}>Submit</button>
      </form>

      {data && data.map((each) => {
        return (
          <>
            <div className="component container">
              <div className="row">
                <h3>{each.name}</h3>
              </div>
              <div className="row">
                <p>{each.temp}</p>
              </div>
              <div className="row">
                <p className="col-md-2" style={{ "width": "100%" }}>{each.weather[0].main} - {each.weather[0].description }
                </p>
                <h4>Wind</h4>
                <div className="col-md-2">
                  <p className="col-md-2">speed: {each.wind.speed}</p>
                  <p className="col-md-2">deg: {each.wind.deg}</p>
                </div>
              </div>
            </div>

          </>
        )
      })}
    </>

  );
}

export default App;
