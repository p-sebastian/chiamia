import { action } from 'typesafe-actions';
import {
  SCREEN_CONTENT_DIMENSIONS,
  SCREEN_PLACEHOLDER_CREATE
} from './types';

export const createPlaceholder = (width: number, height: number) =>
  action (SCREEN_PLACEHOLDER_CREATE, { width, height });

export const setContentDimesions =
  (dimensions: { width: number, height: number }) =>
  action (SCREEN_CONTENT_DIMENSIONS, dimensions);
