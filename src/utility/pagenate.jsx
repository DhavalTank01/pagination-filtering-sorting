import _ from "loadsh";
const pagenate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();
};

export default pagenate;
