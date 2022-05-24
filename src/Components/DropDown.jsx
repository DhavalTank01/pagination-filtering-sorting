import React, { useEffect, useState } from "react";

const DropDown = ({ onChange, pageSize }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList([1, 2, 3, 4, 5, 10, 25, 50, 75, 100]);
  }, []);
  return (
    <div className="form-floating">
      <select
        className="form-select"
        id="floatingSelect"
        aria-label="Floating label select example"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={pageSize}
      >
        <option disabled>Select Row</option>
        {list.map((item, idx) => {
          return (
            <option value={item} key={idx}>
              {item}
            </option>
          );
        })}
      </select>
      <label htmlFor="floatingSelect">Show Records</label>
    </div>
  );
};

export default DropDown;
