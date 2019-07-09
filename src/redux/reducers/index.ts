import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { blogReducer } from './blog.reducer';
import { screenReducer } from './screen.reducer';

export const rootReducer = combineReducers ({
  blog: blogReducer,
  screen: screenReducer
});

export type RootState = StateType<typeof rootReducer>;
export type BlogState = StateType<typeof blogReducer>;
export type ScreenState = StateType<typeof screenReducer>;
