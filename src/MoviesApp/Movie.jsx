import React from "react";
import Like from "./Like";

const Movie = ({ item, OnLike, id, OnDelete }) => {
  const { _id, liked, genre, numberInStock, title, dailyRentalRate } = item;
  return (
    <tr>
      <td>{title}</td>
      <td>{genre.name}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
      <td>
        <Like liked={liked} onClick={() => OnLike(item)} key={_id} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => OnDelete(item)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  );
};

export default Movie;
