import React from "react";
import Movie from "./Movie";
import TabelHader from "./TabelHader";
const MoviesTabel = (props) => {
  const { OnLike, OnDelete, columns, titles, moviesList, onSort } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {titles.map((item, id) => {
            return (
              <TabelHader
                columns={columns}
                onSort={onSort}
                key={id}
                id={id}
                item={item}
              />
            );
          })}
          <th scope="col"> Action</th>
        </tr>
      </thead>
      <tbody>
        {moviesList.map((item, id) => {
          return (
            <Movie
              item={item}
              key={id}
              OnLike={OnLike}
              id={id}
              OnDelete={OnDelete}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default MoviesTabel;
