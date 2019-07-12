import {
  SCREEN_CONTENT_DIMENSIONS,
  SCREEN_TOGGLE_ARTICLE,
  SCREEN_TOGGLE_EXPANSION,
  SCREEN_SET_TRANSFORM
} from '@actions/types';
import { ScreenActionsType } from '@actions/index';

const DEFAULT_STATE = {
  screenWidth: 0,
  screenHeight: 0,
  showArticle: false,
  isShowing: false,
  dimensions: { width: 0, height: 0, left: 0, top: 0, right: 0 },
  transform: { from: '', to: '' }
};

export const screenReducer =
  (state = DEFAULT_STATE, action: ScreenActionsType) => {
  switch (action.type) {
    case SCREEN_CONTENT_DIMENSIONS: {
      const { height, width } = action.payload;
      return { ...state, screenWidth: width, screenHeight: height };
    }
    case SCREEN_TOGGLE_ARTICLE: {
      return { ...state, showArticle: action.payload, isShowing: action.payload };
    }
    case SCREEN_TOGGLE_EXPANSION: {
      return { ...state, isShowing: action.payload };
    }
    case SCREEN_SET_TRANSFORM: {
      const { dimensions, transform } = action.payload;
      return { ...state, dimensions: { ...dimensions }, transform: { ...transform }, isShowing: true };
    }
    default: return state;
  }
};
