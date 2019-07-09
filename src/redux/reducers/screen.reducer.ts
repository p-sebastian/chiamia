import { SCREEN_CONTENT_DIMENSIONS, SCREEN_TOGGLE_ARTICLE } from '@actions/types';
import { ScreenActionsType } from '@actions/index';

const DEFAULT_STATE = {
  screenWidth: 0,
  screenHeight: 0,
  didAnimEnd: false
};

export const screenReducer =
  (state = DEFAULT_STATE, action: ScreenActionsType) => {
  switch (action.type) {
    case SCREEN_CONTENT_DIMENSIONS: {
      const { height, width } = action.payload;
      return { ...state, screenWidth: width, screenHeight: height };
    }
    case SCREEN_TOGGLE_ARTICLE: {
      return { ...state, didAnimEnd: action.payload };
    }
    default: return state;
  }
};
