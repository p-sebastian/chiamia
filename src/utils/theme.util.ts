import { createMuiTheme } from '@material-ui/core';

const DARK = 'rgb(33, 38, 34)';
/**
 * Images required size: 2000 x 832; aspect ratio: 125:52
 */
const theme = createMuiTheme ();

theme.typography.fontFamily = 'dank-mono';
// Title of card, main title
theme.typography.h1.fontFamily = 'roboto';
theme.typography.h1.fontSize = '18px';
theme.typography.h1.lineHeight = '24px';
theme.typography.h1.fontWeight = 'bold';
theme.typography.h1.color = 'white';
// theme.typography.h1.color = 'rgb(33, 38, 34)';
// Title of section, divider
theme.typography.h2.fontFamily = 'roboto';
theme.typography.h2.fontSize = '16px';
theme.typography.h2.lineHeight = '20px';
theme.typography.h2.fontWeight = 'bold';
theme.typography.h2.color = 'white';
// theme.typography.h2.color = 'rgb(47, 47, 47)';
// smaller random titles outside cards
theme.typography.h3.fontFamily = 'roboto';
theme.typography.h3.fontSize = '12px';
theme.typography.h3.lineHeight = '20px';
theme.typography.h3.fontWeight = 'bold';
theme.typography.h3.color = 'white';
// theme.typography.h3.color = 'rgb(47, 47, 47)';
// grayed captions below cards
theme.typography.caption.fontFamily = 'dank-mono-italic';
theme.typography.caption.fontSize = '10px';
theme.typography.caption.lineHeight = '17px';
theme.typography.caption.color = 'white';
// description text above cards
theme.typography.subtitle1.fontFamily = 'dank-mono-italic';
theme.typography.subtitle1.fontSize = '12px';
theme.typography.subtitle1.lineHeight = '18px';
theme.typography.subtitle1.color = 'white';
// theme.typography.subtitle1.color = 'rgb(57, 67, 60)';
// text for tagging images in cards
theme.typography.subtitle2.fontFamily = 'dank-mono';
theme.typography.subtitle2.fontSize = '10px';
theme.typography.subtitle2.lineHeight = '10px';
theme.typography.subtitle2.color = 'rgb(112, 112, 112)';
// main body text
theme.typography.body1.fontFamily = 'dank-mono';
theme.typography.body1.fontSize = '12px';
theme.typography.body1.lineHeight = '20px';
theme.typography.body1.color = '#373737';

export default theme;
