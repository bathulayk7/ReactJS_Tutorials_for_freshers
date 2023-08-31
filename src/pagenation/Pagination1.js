import React from "react";
import "../pagenation/pageStyle.css";

const Pagination1 = ({
  handleStating,
  numbers,
  handlePages,
  handlePrev,
  handleNext,
  currentPage,
  handleEnding
}) => {
  // const pages =[];

  // for(let i=1;i<=Math.ceil(data.length/perPageRows);i++){
  //       pages.push(i);
  // }
  // let numbers=[...Array(perPageRows+1).keys()].slice(1);

  return (
    <>
      <div className="pageNum">
        {
          <div className="pageBtn prev-btn" onClick={handleStating}>
            Starting
          </div>
        }
        {
          <div className="pageBtn prev-btn" onClick={handlePrev}>
            Prev
          </div>
        }
        {numbers &&
          numbers.length > 0 &&
          numbers.map((page) => {
            return (
              <div
                key={page}
                className={`pageBtn ${currentPage === page ? "active" : ""} `}
                onClick={() => handlePages(page)}
              >
                {page}
              </div>
            );
          })}
        {
          <div className="pageBtn next-btn" onClick={handleNext}>
            Next
          </div>
        }
        {
          <div className="pageBtn next-btn" onClick={handleEnding}>
            Ending
          </div>
        }
      </div>
    </>
  );
};

export default Pagination1;
