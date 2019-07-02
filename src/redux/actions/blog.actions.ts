import { action } from 'typesafe-actions';
import { BLOG_ALL } from './types';

export const blogs = (blogs: []) => action (BLOG_ALL, blogs);
