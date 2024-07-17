const Car = ({ goal = true }) => {
  return <>{goal ? <Goal /> : <Missed />}</>;
};
const Missed = () => {
  return <h1>Missed</h1>;
};

const Goal = () => {
  return <h1>Goal</h1>;
};
export default Car;
