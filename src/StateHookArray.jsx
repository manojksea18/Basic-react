import { useState, Button } from "react";
const StateHookArray = () => {
  const [data, setData] = useState([
    { name: "anoj" },
    { name: "manoj" },
    { name: "sanoj" },
  ]);
  const handleChange = () => {};
  return (
    <div>
      <ul>
        {data.length > 0 &&
          data.map((item, index) => (
            // Setting "index" as key because name and age can be repeated, It will be better if you assign uniqe id as key

            <li key={index}>
              <span>{item.name}</span>
              {""}
            </li>
          ))}
        <Button onClick={handleChange} />;
      </ul>
    </div>
  );
};

export default StateHookArray;
