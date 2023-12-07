import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./index";

describe("Button test container", () => {
  const mockHandler = vi.fn();

  beforeEach(() => {
    render(<Pagination currentPage={1} pages={5} paginateGoTo={mockHandler} />);
  });

  test("Component is render", () => {
    expect(screen.getByTestId("pagination-container")).toBe;
  });

  test("Paginate numbers leng is 5", () => {
    const paginateNumber = screen.getAllByTestId("pagination-number");
    expect(paginateNumber).toHaveLength(5);
  });

  test("action next is called", () => {
    const next = screen.getByTestId("next-button");
    fireEvent.click(next);
    expect(mockHandler).toHaveBeenCalled();
  });

  test("action previou is called", () => {
    const prev = screen.getByTestId("prev-button");
    fireEvent.click(prev);
    expect(mockHandler).toHaveBeenCalled();
  });
});
