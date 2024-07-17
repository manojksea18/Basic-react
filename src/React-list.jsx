// eslint-disable-next-line no-unused-vars
import React from "react";

const Garage = () => {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>{cars.length > 0 && cars.map((car) => <Car key={car} brand={car} />)}</>
  );
};

// eslint-disable-next-line react/prop-types
const Car = ({ brand }) => {
  return <div>I am {brand} car</div>;
};

export default Garage;
