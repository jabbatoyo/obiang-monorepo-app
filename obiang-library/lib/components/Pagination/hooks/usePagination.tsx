import { useEffect, useState } from "react";

function usePagination(
  currentPage: number,
  pages: number,
  paginateGoTo: (current: number) => void
) {
  const [pagesNumber, setPagesNunber] = useState<number[]>([]);
  const [disabled, setDisable] = useState({ next: false, prev: false });

  function numbers(window: number) {
    let maxLeft = currentPage - Math.floor(window / 2);
    let maxRight = currentPage + Math.floor(window / 2);
    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = window;
    }

    if (maxRight > pages) {
      maxLeft = pages - (window - 1);

      if (maxLeft < 1) {
        maxLeft = 1;
      }
      maxRight = pages;
    }
    const pagesNum: number[] = [];
    for (let page = maxLeft; page <= maxRight; page++) {
      pagesNum.push(page);
    }
    setPagesNunber(pagesNum);
  }

  function prev() {
    if (!disabled.prev) paginateGoTo(currentPage - 1);
  }

  function next() {
    if (!disabled.next) paginateGoTo(currentPage + 1);
  }

  function last() {
    if (!disabled.next) paginateGoTo(pages);
  }

  function init() {
    if (!disabled.prev) paginateGoTo(1);
  }

  function prevAndInitValidate(current: number) {
    if (!disabled.prev) {
      if (current <= 1) {
        setDisable({ ...disabled, prev: true, next: false });
      }
    }
  }

  function nextAndLastValidate(current: number) {
    if (!disabled.next) {
      if (current >= pages) {
        setDisable({ ...disabled, next: true, prev: false });
      }
    }
  }

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth <= 600) {
        numbers(3);
      } else {
        numbers(5);
      }
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      numbers(3);
    } else {
      numbers(5);
    }
    nextAndLastValidate(currentPage);
    prevAndInitValidate(currentPage);
  }, [currentPage, pages]);

  return {
    numbers,
    prev,
    next,
    init,
    last,
    prevAndInitValidate,
    nextAndLastValidate,
    pagesNumber,
    disabled,
  };
}

export default usePagination;
