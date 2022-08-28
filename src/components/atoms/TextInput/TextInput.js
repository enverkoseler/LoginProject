import React from 'react';
import {
    InputText
} from './Styled';

export const ThemedInput = (props) => {
  return (
    <InputText
    style={{
        borderColor: props.borderColor ? props.borderColor : 'rgb(221,221,221)'
    }}
      {...props}
    />
  );
}