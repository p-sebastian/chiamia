import { useState } from 'react';
import { useAShallowSelector, useADispatch } from '@utils/recipes.util';
import { setPlaceholderTransform } from '@actions/screen.actions';
import { SIDEBAR_WIDTH, MAIN_WIDTH } from '@utils/constants.util';

type Dimensions<N = number> = { width: N, height: N, left: N, top: N, right: N };
type Ref<E = HTMLDivElement> = React.RefObject<E>;
type SetDimensions = React.Dispatch<React.SetStateAction<Dimensions>>;
type UseTransform = () => [Dimensions, SetDimensions, (ref: Ref) => () => void];
export const useTransform: UseTransform = () => {
  const dispatch = useADispatch ();
  const screenState = useAShallowSelector (state => state.screen);
  /**
   * Dimensions is still needed as local because, the dimensions are set
   * for ech element individually when pressed, so I need to know which one
   * that way the placeholder can render only the one that was pressed,
   * if this is global on redux, it will render all of the placeholders
   */
  const [dimensions, setDimensions] = useState ({ width: 0, height: 0, left: 0, top: 0, right: 0 });
  const { screenHeight, screenWidth } = screenState;

  const onClick = (ref: Ref) => () => {
    const { height, width, left, top, right } = ref.current!.getBoundingClientRect ();
    // Margin of card
    // space in the left minus the size of the sidebar
    // which in this case is 20% the screen size
    const x = left - screenWidth * (SIDEBAR_WIDTH / 100);
    const from = `scale3d(${width / screenWidth}, ${height / screenHeight}, 1)`;
    // scale the x size of the main content
    const to = `translate3d(-${x}px, -${top}px, 0) scale3d(${MAIN_WIDTH / 100}, 1, 1)`;

    setDimensions ({ height, width, left, top, right });
    // also begins expansion of placeholder
    dispatch (setPlaceholderTransform ({ height, width, left, top, right }, { from, to }));
  };
  return [dimensions, setDimensions, onClick];
};
