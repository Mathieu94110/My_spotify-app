import SongsPlayer from "./SongsPlayer";
import { renderWithProviders } from "../../utils/test-utils";
import "@testing-library/jest-dom";
const playSong = jest.fn();
const handlePrev = jest.fn();
const handleNext = jest.fn();
const songPropsWithIsPlayingToTrue = {
  handleNext,
  handlePrev,
  playSong,
  isPlaying: true,
  playingIndex: 0,
  trackInfo: {
    track: {
      name: "billy jean",
      artists: [{ name: "michael jackson", duration_ms: 294226 }],
      album: {
        name: "Thriller",
      },
    },
  },
};

const songPropsWithIsPlayingToFalse = {
  handleNext,
  handlePrev,
  playSong,
  isPlaying: false,
  playingIndex: 0,
  trackInfo: {
    track: {
      name: "billy jean",
      artists: [{ name: "michael jackson", duration_ms: 294226 }],
      album: {
        name: "Thriller",
      },
    },
  },
};
describe("SongsPlayer", () => {
  it("should display right props values", async () => {
    const { getByTestId } = renderWithProviders(
      <SongsPlayer {...songPropsWithIsPlayingToTrue} />
    );
    const trackName = getByTestId("player-track-name");
    expect(trackName).toHaveTextContent("billy jean");
  });
  it("should billy jean not be displayed because isPlaying is false", async () => {
    const { queryByText } = renderWithProviders(
      <SongsPlayer {...songPropsWithIsPlayingToFalse} />
    );
    const trackName = queryByText("billy jean");
    expect(trackName).not.toBeInTheDocument();
  });
});
