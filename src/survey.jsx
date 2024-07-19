import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const Survey = () => {
  const [value, onChange] = useState(new Date(""));
  return (
    <div>
      <DatePicker onChange={onChange} value={value} format="y" />
    </div>
  );
};

export default Survey;
