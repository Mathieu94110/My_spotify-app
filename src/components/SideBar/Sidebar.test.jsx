import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import { getPlaylists } from "../../store/actions";
import { getPlaylistsSelector } from "../../store/selectors";

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

const getPlaylistsAction = () => ({ type: "REQUEST_GET_USER_PLAYLISTS" });
test("should dispatch action", () => {
  // Initialize mockstore with empty state
  const initialState = {};
  const store = mockStore(initialState);

  // Dispatch the action
  store.dispatch(getPlaylists());

  // Test if your store dispatched the expected actions
  const actions = store.getPlaylistsAction();
  const expectedPayload = { type: "REQUEST_GET_USER_PLAYLISTS" };
  expect(actions).toEqual([expectedPayload]);
});
// test("should render the data from Redux state", () => {
//   const store = mockStore({
//     playlists: {
//       data: playlist,
//     },
//   });

//   function mockGetPlaylists() {
//     return playlist;
//   }

//   render(
//     <Router>
//       <Provider store={store}>
//         <SideBar getPlaylists={mockGetPlaylists} />
//       </Provider>
//     </Router>
//   );

//   const dataElement = screen.getByText("holiday playlist");
//   expect(dataElement).toBeInTheDocument();
// });

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
