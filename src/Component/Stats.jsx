import React from "react";
import bgImage from "..\\assets\\stats-copy.png"
const Stats = () => {
  return (
    <div
    className="flex justify-center items-center "
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover', 
      height: '300px',
      width: '100%',
    }}
    >
      <img src="src\assets\content_number.svg"></img>
    </div>
  );
};

export default Stats;
