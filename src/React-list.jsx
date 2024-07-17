const Garage = () => {
  const carss = ["BMW", "Audi", "Tesla"];
  return (
    <div>
      {carss.length > 0 && carss.map((car, id) => <Car key={id} brand={car} />)}
    </div>
  );
};

const Car = (brand) => {
  return <div>I am {brand} car</div>;
};

export default Garage;
