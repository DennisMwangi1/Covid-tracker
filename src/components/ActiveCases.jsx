import React from "react";
import AnimatedNumbers from "react-animated-numbers";



function ActiveCases({selectedCountryStats}) {
  return (
    <>
      <div className="grid grid-cols-5">
        <h1 className=' pb-2 tracking-wider  font-serif font-semibold col-span-4'>Active cases</h1>
      </div>
       <div className="pl-8" >
        <AnimatedNumbers
        includeComma
        animateToNumber={selectedCountryStats?.cases?.active}
        fontStyle={{ fontSize: 30 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>
       </div>
       </>
  );
}

export default ActiveCases