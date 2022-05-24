import React, { useState } from "react";

const TabelHader = ({ item, onSort }) => {
  const [Order, setOrder] = useState("up");
  return (
    <>
      <th
        scope="col"
        role="button"
        onClick={() => {
          const new_order = Order === "up" ? "down" : "up";
          setOrder(new_order);
          const Odr = Order === "up" ? "desc" : "asc";
          onSort(item, Odr);
        }}
      >
        <span className="text-capitalize">{item}</span>
        <i className={`mx-1 fa-solid fa-arrow-${Order}-short-wide`}></i>
      </th>
    </>
  );
};

export default TabelHader;
