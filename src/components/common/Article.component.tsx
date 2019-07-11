import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { useASelector } from '@utils/recipes.util';
import { opacityAnimate } from '@utils/keyframes.util';

const CArticle: React.FC = () => {
  const didAnimEnd = useASelector (state => state.screen.didAnimEnd);

  return (
    <Container didAnimEnd={didAnimEnd}>
      <Typography variant="h1">Some title</Typography>
      <Typography variant="body1">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis nibh sem, eget dictum arcu lobortis scelerisque. Pellentesque maximus semper dictum. Vestibulum facilisis tempor dui, sed lacinia mi sodales a. Integer ultrices laoreet blandit. Sed ullamcorper, erat quis rhoncus commodo, dolor enim ultricies odio, eget luctus est metus ut dolor. Nunc eget lacus mi. Vestibulum ultricies ultricies interdum. Etiam malesuada, nisi quis mollis elementum, felis dui posuere lorem, eget scelerisque urna libero at enim. Morbi vitae nulla quam. Aliquam eleifend eu arcu vitae pretium. Praesent ut consequat neque, sed fringilla urna. Suspendisse posuere at erat nec sagittis. Quisque semper suscipit arcu vitae ultricies.
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ullamcorper eu sem eu efficitur. Morbi finibus hendrerit massa molestie pellentesque. Praesent eget condimentum tellus. Nunc porta arcu id nulla pulvinar faucibus. Donec convallis nisi urna, et lobortis risus rhoncus non. Sed consectetur nisl in sollicitudin ultricies. Sed et vehicula turpis. Integer scelerisque ligula vitae erat faucibus blandit. Maecenas viverra nisi eget ornare cursus. Sed pulvinar ligula in sem semper mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tincidunt commodo felis eu dictum. Phasellus auctor elementum cursus. Mauris et nunc scelerisque, lacinia urna eget, eleifend orci.
Aliquam auctor sapien nec arcu cursus, in imperdiet nisl pretium. Morbi eros ipsum, pellentesque eget consectetur vitae, hendrerit vitae ipsum. Aenean libero libero, ultricies vitae ipsum at, pretium porta tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam in elit placerat, interdum sapien quis, laoreet arcu. Ut rutrum, justo at rutrum suscipit, quam quam posuere purus, id suscipit augue risus eget diam. Curabitur tincidunt mi non leo porta, auctor sagittis odio efficitur. Mauris tellus eros, accumsan eget turpis sed, rutrum porttitor sem. Vestibulum sed pellentesque purus, at pharetra nisl.
Nulla sed suscipit turpis. Mauris finibus dapibus quam, quis molestie mauris. Sed congue ante magna, nec iaculis mauris mattis sed. Nam luctus ligula vitae dui commodo porta. Proin sodales neque sed dignissim posuere. In vitae libero tincidunt nisi sodales vulputate. Cras id ante venenatis, mattis neque id, fringilla turpis. Pellentesque erat orci, convallis a nisi quis, sagittis finibus eros. Ut hendrerit cursus sapien, sit amet faucibus nunc luctus vitae. Phasellus enim dolor, iaculis sit amet placerat commodo, mollis sit amet tortor. Aenean hendrerit dui a justo finibus blandit. Phasellus vel sem hendrerit, pulvinar purus commodo, egestas arcu. Donec egestas nunc eget enim laoreet porta. Aenean id arcu a massa faucibus hendrerit. Suspendisse in enim eget dolor finibus pharetra. Phasellus venenatis nibh est, non pharetra velit aliquet at.
Ut velit lorem, pulvinar ac tellus eleifend, dictum ultrices magna. Morbi pretium vestibulum varius. Vivamus in nunc purus. Fusce sit amet nisl vitae leo tempus vulputate. Vestibulum malesuada ante convallis, congue tellus eu, ultrices dui. Phasellus vehicula nulla tellus, a fringilla risus vulputate vel. Suspendisse laoreet at orci eget consectetur. Etiam ullamcorper dapibus interdum. Quisque congue mi et magna sodales, a aliquam lectus malesuada. 
      </Typography>
    </Container>
  );
};

const Container = styled.div<{ didAnimEnd: boolean }>`
  height: 100vh;
  animation: ${({ didAnimEnd }) => didAnimEnd ? opacityAnimate : ''} 0.6s;
  ${({ didAnimEnd }) =>
    didAnimEnd ? 'z-index: 100;' : 'opacity: 0;'
  };
`;

export default CArticle;
