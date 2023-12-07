import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./index";

describe("Button test container", () => {
  const mockHandler = vi.fn();

  beforeEach(() => {
    render(
      <Button type="button" onClick={mockHandler}>
        Show more
      </Button>
    );
  });

  test("Renders its children", () => {
    screen.getByText("Show more");
  });

  test("Clicking the button calls event handler once", () => {
    const button = screen.getByText("Show more");
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalled();
  });
});
