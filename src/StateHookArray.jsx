import { useState } from "react";
const StateHookArray = () => {
  const [data, setData] = useState([
    { name: "anoj" },
    { name: "manoj" },
    { name: "sanoj" },
  ]);
  const handleChange = (e, index) => {};
  return (
    <div>
      <ul>
        {data.length > 0 &&
          data.map((item) => {
            <li>{item.name}</li>;
            <input placeholder="enter correct name" />;
            onChange = {};
          })}
        ;
      </ul>
    </div>
  );
};

export default StateHookArray;
