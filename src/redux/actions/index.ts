import { ActionType } from 'typesafe-actions';

import * as blogActions from './blog.actions';
export type BlogActionsType = ActionType<typeof blogActions>;

export { blogActions };
