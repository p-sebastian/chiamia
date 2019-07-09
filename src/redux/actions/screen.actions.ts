import { action } from 'typesafe-actions';
import {
  SCREEN_CONTENT_DIMENSIONS,
  SCREEN_PLACEHOLDER_CREATE,
  SCREEN_TOGGLE_ARTICLE
} from './types';

export const createPlaceholder = (width: number, height: number) =>
  action (SCREEN_PLACEHOLDER_CREATE, { width, height });

export const setContentDimesions =
  (dimensions: { width: number, height: number }) =>
  action (SCREEN_CONTENT_DIMENSIONS, dimensions);

export const toggleArticle = (show: boolean) =>
  action (SCREEN_TOGGLE_ARTICLE, show);
