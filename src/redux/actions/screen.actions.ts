import { action } from 'typesafe-actions';
import {
  SCREEN_CONTENT_DIMENSIONS,
  SCREEN_PLACEHOLDER_CREATE,
  SCREEN_TOGGLE_ARTICLE,
  SCREEN_TOGGLE_EXPANSION,
  SCREEN_SET_TRANSFORM
} from './types';

export const createPlaceholder = (width: number, height: number) =>
  action (SCREEN_PLACEHOLDER_CREATE, { width, height });

export const setContentDimesions =
  (dimensions: { width: number, height: number }) =>
  action (SCREEN_CONTENT_DIMENSIONS, dimensions);

export const toggleArticle = (show: boolean) =>
  action (SCREEN_TOGGLE_ARTICLE, show);

/**
 * Toggles expansion for placeholder animation
 * @param isShowing
 */
export const toggleExpansion = (isShowing: boolean) =>
  action (SCREEN_TOGGLE_EXPANSION, isShowing);

type Dimensions<N = number> = { width: N, height: N, left: N, top: N, right: N };
export const setPlaceholderTransform = (dimensions: Dimensions, transform: { from: string; to: string }) =>
  action (SCREEN_SET_TRANSFORM, { dimensions, transform });
