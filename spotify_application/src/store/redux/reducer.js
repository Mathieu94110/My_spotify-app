import {
  FETCH_RECENTLY_PLAYED,
} from './types';

export const initialState = {
  recentlyPlayed: [],
  trackLoading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECENTLY_PLAYED:
      return {
        ...state,
        recentlyPlayed: action.payload,
      };
    default:
      return state;
  }
}
