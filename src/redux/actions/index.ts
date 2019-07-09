import { ActionType  } from 'typesafe-actions';

import * as blogActions from './blog.actions';
export type BlogActionsType = ActionType<typeof blogActions>;

import * as screenActions from './screen.actions';
export type ScreenActionsType = ActionType<typeof screenActions>;

export { blogActions, screenActions };
