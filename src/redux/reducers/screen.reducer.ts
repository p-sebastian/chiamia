import { SCREEN_CONTENT_DIMENSIONS } from '@actions/types';
import { ScreenActionsType } from '@actions/index';

const DEFAULT_STATE = {
  screenWidth: 0,
  screenHeight: 0
};

export const screenReducer =
  (state = DEFAULT_STATE, action: ScreenActionsType) => {

  switch (action.type) {
    case SCREEN_CONTENT_DIMENSIONS: {
      const { height, width } = action.payload;
      return { screenWidth: width, screenHeight: height };
    }
    default: return state;
  }
};
