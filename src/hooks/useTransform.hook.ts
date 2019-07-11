import { ScreenState } from '@reducers/index';
import { useState } from 'react';
import { useAShallowSelector } from '@utils/recipes.util';

type Dimensions<N = number> = { width: N, height: N, left: N, top: N, right: N };
type Ref<E = HTMLDivElement> = React.RefObject<E>;
type UseTransform = () => [string[], Dimensions, (ref: Ref) => () => void];
export const useTransform: UseTransform = () => {
  const screenState = useAShallowSelector (state => state.screen);
  const [transform, setTransform] = useState (['', '']);
  const [dimensions, setDimensions] = useState ({ width: 0, height: 0, left: 0, top: 0, right: 0 });
  const { screenHeight, screenWidth } = screenState;

  const onClick = (ref: Ref) => () => {
    const { height, width, left, top, right } = ref.current!.getBoundingClientRect ();
    // Margin of card
    // space in the left minus the size of the sidebar
    // which in this case is 20% the screen size
    const x = left - screenWidth * 0.2;
    const from = `scale3d(${width / screenWidth}, ${height / screenHeight}, 1)`;
    const to = `translate3d(-${x}px, -${top}px, 0) scale3d(0.8, 1, 1)`;

    setDimensions ({ height, width, left, top, right });
    setTransform ([from, to]);
  };
  return [transform, dimensions, onClick];
};
