import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

type StyledTypo<P = {}> = React.ComponentType<TypographyProps & P>;
type Variant = 'h1' | 'h2' | 'h3' | 'caption' | 'subtitle1' | 'subtitle2' | 'body1';
export const Typo = <P extends {}>(variant: Variant) =>
  styled<StyledTypo<P>> (Typography as any).attrs (() => ({ variant }));
