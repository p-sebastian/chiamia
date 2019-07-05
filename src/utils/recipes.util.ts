import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from '@reducers/index';
import { Dispatch, useCallback } from 'react';
import { TActions } from '@utils/types.util';

/**
 * useDispatch but with type safety
 */
export const useADispatch = () => useDispatch<Dispatch<TActions>> ();

/**
 * memoizes callback so that if its sent to a child component
 * it doesnt trigger a rerender when the reference changes
 */
export const useADispatchC = (action: TActions) => {
  const dispatch = useADispatch ();
  return useCallback (
    () => dispatch (action),
    [dispatch]
  );
};

type Selector<R, S> = (state: S) => R;
/**
 * Uses a shallow equal so that it doesnt trigger a
 * re render everytime when an object is returned.
 * ONLY GOES DOWN ONE LEVEL
 */
export const useAShallowSelector =
  <TSelected, TState = RootState>(selector: Selector<TSelected, TState>) =>
  useSelector<TState, TSelected> (selector, shallowEqual);

/**
 * to use when returning a primitive value from
 * the selector
 */
export const useASelector =
  <TSelected, TState = RootState>(selector: Selector<TSelected, TState>) =>
  useSelector<TState, TSelected> (selector);
