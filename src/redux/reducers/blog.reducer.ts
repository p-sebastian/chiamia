import { BLOG_ALL } from '@actions/types';
import { BlogActionsType } from '@actions/index';

const DEFAULT_STATE = {
  blogs: []
};

export const blogReducer =
  (state = DEFAULT_STATE, action: BlogActionsType) => {

  switch (action.type) {
    case BLOG_ALL: return { ...state, blogs: action.payload };
    default: return state;
  }
};
