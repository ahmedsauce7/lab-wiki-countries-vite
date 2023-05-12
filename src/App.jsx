// src/App.jsx
import './App.css'
// import countriesJSON from './countries.json'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'


function App() {
  const [countries, setCountries] = useState([]);
  // iteration 4 using fetch 
  const fetchData = async () => {
    try {
      const response = await fetch("https://ih-countries-api.herokuapp.com/countries")
      const parsed = await response.json()
      console.log(parsed)
      setCountries(parsed)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
      fetchData() 
    }, []
    )

  // iteration 4 using axios
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
  //     console.log(response.status)
  //     if (response.status === 200){
  //       setCountries(response.data)
  //     }
  //   } catch (error) {
  //     console.log(error) 
  //   }
  // }
  // useEffect(() => {
  //   fetchData() 
  // }, []
  // )

  return <div className='App'>
    <Navbar />
    <div className="mainPage">
         <CountriesList countries={countries} />
         <div className="mainpageDetail">
          <Routes>
          <Route
            path="/:alpha3Code"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
        </div>
      </div>
  </div>
}
export default App
