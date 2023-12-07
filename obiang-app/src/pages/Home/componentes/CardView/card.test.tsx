import { render, fireEvent, screen } from "@testing-library/react";
import Card from "./index";

//images
import defaultImg from "../../../../assets/default-img.png";
import { BrowserRouter } from "react-router-dom";

describe("Card test container", () => {
  const mockHandler = vi.fn();

  const pokemons = [
    {
      id: 1,
      img: defaultImg,
      name: "abra",
      base_experience: 1,
    },
    {
      id: 2,
      img: defaultImg,
      name: "poliwhirl",
      base_experience: 1,
    },
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Card pokemons={pokemons} showMore={mockHandler} />
      </BrowserRouter>
    );
  });

  test("Render 2 card", () => {
    const card = screen.getAllByTestId("card-pokemon-content");
    expect(card).toHaveLength(2);
  });

  test("Card img is correct", () => {
    const cardImg = document.querySelector("img") as HTMLImageElement;
    expect(cardImg.src).toContain(defaultImg);
  });

  test("Card contain correct pokemon name abra", () => {
    const button = screen.getByText("abra");
    expect(button).toBe;
  });

  test("Card contain correct pokemon name poliwhirl", () => {
    const button = screen.getByText("poliwhirl");
    expect(button).toBe;
  });

  test("action Show more is called", () => {
    const showMore = screen.getByText("Show more...");
    fireEvent.click(showMore);
    expect(mockHandler).toHaveBeenCalled();
  });
});
