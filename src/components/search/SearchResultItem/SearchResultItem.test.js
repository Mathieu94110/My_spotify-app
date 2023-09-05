import SearchResultItem from "./SearchResultItem";
import { renderWithProviders } from "../../../utils/test-utils";
import { fireEvent } from "@testing-library/react";

const handleClick = jest.fn();

const searchedResult = {
  artist: "Sfina",
  title: "month",
  uri: "test.uri",
  albumUrl: "test-url.jpg",
};

describe("SearchResult", () => {
  it("should display right props values", () => {
    const searchedResult = {
      artist: "Sfina",
      title: "month",
      uri: "test.uri",
      albumUrl: "test-url.jpg",
    };
    const { getByText } = renderWithProviders(
      <SearchResultItem track={searchedResult} modalCallback={handleClick} />
    );
    expect(getByText(/sfina/i)).toBeInTheDocument();
  });

  it("should call parentCallBack on button click", async () => {
    const { getByRole } = renderWithProviders(
      <SearchResultItem track={searchedResult} modalCallback={handleClick} />
    );
    const btn = getByRole("button");
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });
});
