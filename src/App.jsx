// src/App.jsx
import './App.css'
import countriesJSON from './countries.json'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Route, Routes } from 'react-router-dom';


function App() {
  const [countries, setCountries] = useState(countriesJSON);
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
