import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import washhands from "../images/washhands.png";
import ConfirmedCases from "./ConfirmedCases";
import ActiveCases from "./ActiveCases";
import RecoveredCases from "./RecoveredCases";
import Deaths from "./Deaths";
import Population from "./Population";
import Tests from "./Tests";
import BarChart from "./BarChart";

function Statistics() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Kenya");
  const [selectedcountryStats, setSelectedCountryStats] = useState({});
  const [filter, setFilter] = useState("");
  const selectRef = useRef();
  console.log(countries);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/statistics",
      headers: {
        "X-RapidAPI-Key": "a458c332e4msh71108d98a0d6ff0p1d3b72jsn23c111109d80",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setCountries(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/statistics",
      params: { country: selectedCountry },
      headers: {
        "X-RapidAPI-Key": "a458c332e4msh71108d98a0d6ff0p1d3b72jsn23c111109d80",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setSelectedCountryStats(response.data.response[0]);
        console.log(response.data.response[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [selectedCountry]);

  function handleCountryChange(event) {
    setSelectedCountry(event.target.value);
  }

  function handleFilterChange(event) {
    setFilter(event.target.value);
    setSelectedCountry("");
  }
  function handleInputFocus(event) {
    const isInputClicked = event.target.tagName.toLowerCase() === "input";
    if (!isInputClicked) {
      selectRef.current.focus();
    }
  }

  const filteredCountries = countries?.filter((country) =>
    country.country.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main>
      <section className="flex justify-between pt-10">
        <div>
          <h1 className="  text-xl pl-2 ml-10 p-2  ">Select a country</h1>
          <input
            className=" text-center text-lg pl-2 pr-2 ml-10 p-2  "
            style={{ fontFamily: "FontAwesome" }}
            type="text"
            placeholder="Search countries..."
            value={filter}
            onChange={handleFilterChange}
            // onFocus={handleInputFocus}
          />
          <select
            className=" text-center  ml-2  "
            onChange={handleCountryChange}
            value={selectedCountry}
            ref={selectRef}
          >
            {filteredCountries.map((country) => (
              <option key={country.country} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h2 className="mr-4 font-bold text-lg">
            Current country is{" "}
            <span className="text-amber-600 text-xl">{selectedCountry}</span>
          </h2>
        </div>
      </section>
      <section className="grid grid-cols-2 ">
        <section>
          <div className="m-6 bg-white  col-span-2 rounded-3xl">
            {selectedcountryStats?<BarChart selectedcountryStats={selectedcountryStats}/>:<div className="flex justify-center">
              <div className="lds-dual-ring "></div>
            </div>}
          </div>
          <div className="m-6 mt-8 p-4 bg-white rounded-3xl flex justify-evenly">
          <img src={washhands} alt="" width="200px"  />
          <div className="m-auto">
            <h1 className="text-lg font-bold font-serif text-center  tracking-wide">
              Prevention
            </h1>
            <p className="font-semibold p-2 text-center ">
              Wear a mask.<br></br>Clean your hands.<br></br>Keep a safe
              distance.
            </p>
            <button className="float-right text-amber-500 font-semibold mt-4 border-2 pl-1 pr-1 rounded-full border-amber-500">
              Read More &#10513;
            </button>
          </div>
        </div>
        </section>
        
        <section className="grid grid-cols-2">
        <div className=" pt-1 pb-1 bg-white m-2 mt-6 rounded-3xl flex justify-between">
            <div className="font-bold text-amber-500 m-auto">
            {selectedcountryStats?.population? <Population selectedCountryStats={selectedcountryStats} />:<div className="flex justify-center">
              <div className="lds-dual-ring "></div>
            </div>}
            </div>
          </div>
        <div className="pt-1 pb-1 bg-blue-800 m-2 mt-6 rounded-3xl flex justify-between">
            <div className="font-bold text-white m-auto">
            {selectedcountryStats?.cases? <ConfirmedCases selectedCountryStats={selectedcountryStats} />:<div className="flex justify-center">
              <div className="lds-dual-ring"></div>
            </div>}
            </div>
          </div>
          <div className="pt-1 pb-1 m-2 mt-6 bg-green-500 rounded-3xl flex justify-between">
            <div className="font-bold text-white  m-auto ">
            {selectedcountryStats?.cases? <RecoveredCases selectedCountryStats={selectedcountryStats} />:<div className="flex justify-center">
              <div className="lds-dual-ring "></div>
            </div>}
            </div>
          </div>
          <div className="pt-1 pb-1 bg-amber-500 m-2 mt-6 rounded-3xl flex justify-between text-white">
            <div className="font-bold text-white m-auto">
            {selectedcountryStats?.cases? <ActiveCases selectedCountryStats={selectedcountryStats} />:<div className="flex justify-center">
              <div className="lds-dual-ring "></div>
            </div>}
            </div>
          </div>
          <div className=" pt-1 pb-1 bg-white m-2 mt-6 rounded-3xl flex justify-between">
            <div className="font-bold text-green-600 m-auto">
            {selectedcountryStats?.tests? <Tests selectedCountryStats={selectedcountryStats} />:<div className="flex justify-center">
              <div className="lds-dual-ring "></div>
            </div>}
            </div>
          </div>
          
          <div className=" pt-1 pb-1 bg-red-500 m-2 mt-6 rounded-3xl flex justify-between">
            <div className="font-bold text-white m-auto">
            {selectedcountryStats?.cases? <Deaths selectedCountryStats={selectedcountryStats} />:<div className="flex justify-center">
              <div className="lds-dual-ring "></div>
            </div>}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Statistics;
