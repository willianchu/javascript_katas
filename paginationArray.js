// returns a list of page numbers for pagination restricted to 5 pages with DOTS in between first and last page
const DOTS = "...";
const currentPage = 9;
const totalCount = 151;
const pageSize = 15;

const paginationArray = (currentPage, totalCount, pageSize) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const pageArray = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageArray.push(i);
    }
  } else {
    if (currentPage <= 2) {
      for (let i = 1; i <= 3; i++) {
        pageArray.push(i);
      }
      pageArray.push(DOTS);
      pageArray.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageArray.push(1);
      pageArray.push(DOTS);
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pageArray.push(i);
      }
    } else {
      pageArray.push(1);
      pageArray.push(DOTS);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageArray.push(i);
      }
      pageArray.push(DOTS);
      pageArray.push(totalPages);
    }
  }
  return pageArray;
};

console.log(paginationArray(currentPage, totalCount, pageSize));