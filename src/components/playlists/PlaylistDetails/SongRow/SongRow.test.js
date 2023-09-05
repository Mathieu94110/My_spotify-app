import SongRow from "./SongRow";
import { renderWithProviders } from "../../../../utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";

const playSong = jest.fn();
const handleDelete = jest.fn();

const tracksProps = {
  name: "billy jean",
  preview_url: "https://preview-url",
  album: {
    images: [{ url: "https://image-test-url" }],
    name: "thriler",
  },
  artists: [
    {
      name: "michael jackson",
    },
  ],
};

describe("SongRow", () => {
  it("should display track name", async () => {
    const { getByRole } = renderWithProviders(
      <SongRow
        currentIndex={0}
        playSong={playSong}
        isPlaying={false}
        track={tracksProps}
        handleDelete={handleDelete}
        playingIndex={1}
      />
    );
    const h2 = getByRole("heading", { level: 2 });
    expect(h2.textContent).toBe(" billy jean");
  });

  it("should img url be https://image-test-url", async () => {
    const { getAllByAltText } = renderWithProviders(
      <SongRow
        currentIndex={0}
        playSong={playSong}
        isPlaying={false}
        track={tracksProps}
        handleDelete={handleDelete}
        playingIndex={1}
      />
    );
    const img = getAllByAltText("billy jean");
    expect(img[0]).toHaveAttribute("src", "https://image-test-url");
  });

  it("should img url be mystery image", async () => {
    const tracksWitoutImgUrl = {
      ...tracksProps,
      album: { images: [{ url: "" }] },
    };
    const { getAllByAltText } = renderWithProviders(
      <SongRow
        currentIndex={0}
        playSong={playSong}
        isPlaying={false}
        track={tracksWitoutImgUrl}
        handleDelete={handleDelete}
        playingIndex={1}
      />
    );

    const img = getAllByAltText("billy jean");
    expect(img[0]).toHaveAttribute("src", "question-mark.jpg");
  });
});
