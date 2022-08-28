import React from 'react';
import {
    ThemeButton,
    BtnText
} from './Styled';

export const ThemedButton = (props) => {
  return (
    <ThemeButton
      {...props}
    >
        <BtnText>{props.title}</BtnText>
    </ThemeButton>
  );
}