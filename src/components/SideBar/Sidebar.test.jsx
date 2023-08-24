import SideBar from "./SideBar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
const mockStore = configureStore([]);

const playlist = [
  {
    name: "holiday playlist",
    id: 1,
  },
  {
    name: "working playlist",
    id: 2,
  },
];

test("should render the data from Redux state", () => {
  const store = mockStore({
    playlists: {
      data: playlist,
    },
  });

  render(
    <Router>
      <Provider store={store}>
        <SideBar />
      </Provider>
    </Router>
  );

  const dataElement = screen.getByText("holiday playlist");
  expect(dataElement).toBeInTheDocument();
});

// beforeEach(() => {
//   let store = mockStore({
//     userPlaylists: playlist,
//   });

//   render(
//     <Provider store={store}>
//       <Sidebar />
//     </Provider>
//   );
// });

// test("loads and displays greeting", async () => {
//   // ARRANGE
//   //   render(<Sidebar userPlaylists={playlist} />);

//   // ACT
//   await userEvent.click(screen.getByTestId("sidebar-menu-toggle"));
//   await screen.findByTestId("sidebar-menu-text");

//   // ASSERT
//   expect(screen.getByTestId("sidebar-menu-toggle")).toHaveClass(
//     "sidebar__text-display--none"
//   );
// });
