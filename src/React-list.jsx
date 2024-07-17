const Garage = () => {
  const cars = ["BMW", "Audi", "Tesla"];

  return (
    <div>
      {cars.length > 0 && cars.map((car, id) => <Car key={id} brand={car} />)}
    </div>
  );
};
const Car = (brand) => {
  return <div>I am {brand} car</div>;
};

export default Garage;
