import React, { useState } from 'react';
// import Select from 'react-select';

function Search({statistics,setCountry}) {
const options = []
if (statistics.response){
    
statistics.response.map((stat)=>{
   options.push({
    value:stat.country,
    label:stat.country
   }
   )
   return true
})
}





  return (
    <></>
  //   <Select
  //   placeholder='Select Country.....'
  //   onChange={(e)=>setCountry(e.value)}
  //   className="w-2/12 ml-6"
  //   classNamePrefix="select"
  //   defaultValue={options[0]}
  //   name="color"
  //   options={options}
  // />
    // <SelectSearch options={options}  name="language" placeholder="Choose your language" />
  )
}

export default Search