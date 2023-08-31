import React, { useState } from "react";
import Pagination1 from "./Pagination1";
import { useEffect } from "react";
import axios from "axios";

const PageComp1 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState([]);
  const perPageRows = 10;
  let numbers = [...Array(perPageRows + 1).keys()].slice(1);
  let [nPages, setNPages] = useState(0);
  console.log("nPages", nPages);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setData(res.data);
        setPerPage(res.data.slice(0, perPageRows));
        setNPages(Math.ceil(res.data.length / perPageRows));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleStating = () => {
    setPerPage(data.slice(0,  perPageRows));
    setCurrentPage(1);
  };
  const handleEnding = () => {
    setPerPage(
      data.slice(
        perPageRows * nPages- perPageRows,
        nPages * perPageRows
      )
    );
    setCurrentPage(nPages);
  };

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPerPage(
        data.slice(
          perPageRows * (currentPage - 1) - perPageRows,
          (currentPage - 1) * perPageRows
        )
      );
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePages = (page) => {
    setCurrentPage(page);
    setPerPage(
      data.slice(perPageRows * page - perPageRows, page * perPageRows)
    );
  };
  const handleNext = () => {
    if (currentPage !== nPages) {
      setPerPage(
        data.slice(
          perPageRows * (currentPage + 1) - perPageRows,
          (currentPage + 1) * perPageRows
        )
      );
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <div>
        {perPage && perPage.length > 0
          ? perPage.map((list) => {
              return (
                <div key={list.id}>
                  <h5>{list.title}</h5>
                </div>
              );
            })
          : "Data is Loading"}
      </div>
      <Pagination1
        handlePrev={handlePrev}
        numbers={numbers}
        handleNext={handleNext}
        handlePages={handlePages}
        currentPage={currentPage}
        handleStating={handleStating}
        handleEnding={handleEnding}
      />
    </>
  );
};

export default PageComp1;
