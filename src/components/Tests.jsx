import React from "react";
import AnimatedNumbers from "react-animated-numbers";



function Tests({selectedCountryStats}) {
  return (
    <>
      <div className="grid grid-cols-5">
        <h1 className=' pb-2 tracking-wider  font-serif font-semibold col-span-4'>Total Testing Done</h1>
      </div>
       <div className="" >
        <AnimatedNumbers
        includeComma
        animateToNumber={selectedCountryStats?.tests?.total}
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

export default Tests