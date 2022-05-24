import React from "react";

const ListGroup = ({ items, OnClick, currentGenres }) => {
  return (
    <div className="list-group">
      <button
        type="button"
        className={
          "All" === currentGenres
            ? "list-group-item list-group-item-action active"
            : "list-group-item list-group-item-action"
        }
        aria-current="true"
        onClick={() => {
          OnClick("All");
        }}
      >
        All Genres
      </button>
      {items.map((item) => {
        return (
          <button
            key={item._id}
            type="button"
            className={
              item.name === currentGenres
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            onClick={() => {
              OnClick(item.name);
            }}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};
ListGroup.defaultProps = {
  currentGenres: "All",
};
export default ListGroup;
