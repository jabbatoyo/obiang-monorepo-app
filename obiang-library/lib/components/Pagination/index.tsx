import usePagination from "./hooks/usePagination";
import classNames from "classnames";

//images
import arrow from "../../icons/next.png";
import arrowLast from "../../icons/last.png";

//styles
import "./index.scss";

interface pagination {
  currentPage: number;
  pages: number;
  numberActiveBackground?: "yellow" | "lowYellow" | "blue" | "lowBlue";
  numberActiveTextColor?:
    | "yellow"
    | "lowYellow"
    | "blue"
    | "lowBlue"
    | "white"
    | "black";
  numberBackgound?: "yellow" | "lowYellow" | "blue" | "lowBlue";
  paginateGoTo: (current: number) => void;
}

export default function Pagination({
  currentPage,
  pages,
  numberActiveBackground,
  numberActiveTextColor,
  numberBackgound,
  paginateGoTo,
}: pagination) {
  const { init, last, next, prev, pagesNumber, disabled } = usePagination(
    currentPage,
    pages,
    paginateGoTo
  );

  const numberClass = `${
    numberActiveBackground ? `active-backgound-${numberActiveBackground}` : ""
  } ${numberActiveTextColor ? `color-${numberActiveTextColor}` : ""} ${
    numberBackgound ? `background-${numberBackgound}` : ""
  }`;

  return (
    <div className="pagination-container" data-testid="pagination-container">
      <div className="paginate-pages-content">
        <span
          className={classNames(`prev-button first-page`, {
            disabled: disabled.prev,
          })}
          onClick={() => init()}
        >
          <img src={arrowLast} alt="init" />
        </span>
        <span
          data-testid="prev-button"
          className={classNames(`prev-button`, {
            disabled: disabled.prev,
          })}
          onClick={() => prev()}
        >
          <img src={arrow} alt="prev" />
        </span>
        <div className="pagination-numbers-container">
          {pagesNumber.map((item, index) => {
            return (
              <span
                data-testid="pagination-number"
                className={classNames(`pagination-number ${numberClass}`, {
                  active: currentPage === item,
                })}
                onClick={() => paginateGoTo(item)}
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>
        <span
          data-testid="next-button"
          className={classNames(`next-button`, {
            disabled: disabled.next,
          })}
          onClick={() => next()}
        >
          <img src={arrow} alt="next" />
        </span>
        <span
          className={classNames(`next-button last-page`, {
            disabled: disabled.next,
          })}
          onClick={() => last()}
        >
          <img src={arrowLast} alt="last" />
        </span>
      </div>
    </div>
  );
}
