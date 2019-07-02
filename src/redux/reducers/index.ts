
import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { blogReducer } from './blog.reducer';

export const rootReducer = combineReducers ({
  blog: blogReducer
});

export type RootState = StateType<typeof rootReducer>;
export type BlogState = StateType<typeof blogReducer>;
