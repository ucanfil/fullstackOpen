import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    let isActive = true;

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
      .then(response => {
        setWeather(response.data);
      });

    return () => {
      isActive = false;
    };
  },[country]);

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      {country.languages.map(language => <p key={language.name}>{language.name}</p>)}
      <img src={country.flag} alt="country_flag" width="150"></img>
      {weather && weather.main && (
        <>
          <h2>Weather in {country.capital}</h2>
          <p><strong>temperature:</strong> {weather.main.temp} Celcius</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
          <p><strong>wind:</strong> {weather.wind.speed} mph degree {weather.wind.deg}</p>
        </>)
      }
    </div>
  );
}

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [shownCountry, setShownCountry] = useState({});

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  const handleInput = (e) => {
    setFiltered(countries.filter(country => country.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }

  return (
    <div>
      <label>
        Find Countries: <input type="text" onChange={handleInput} />
      </label>
      {
        filtered.length > 10 ?
        <p>Too many matches, specify another filter</p> :
        (
          filtered.length > 1 ?
          filtered.map(country =>
            (<div key={country.name}>{country.name}
              <button onClick={() => {
                setIsShown(!isShown);
                setShownCountry(country);
              }}>show</button>
            </div>)
          ) :
          filtered.map(country => (
            <div key={country.name}>
              <Country country={country} />
            </div>
          ))
        )
      }
      {isShown && <Country country={shownCountry} /> }
      <div>
      </div>
    </div>
  );
}

export default App;
