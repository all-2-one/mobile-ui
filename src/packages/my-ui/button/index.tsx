import React from 'react';
import { Button as TaroButton } from '@tarojs/components';

export interface ButtonProps {
  loading?: boolean;
  icon?: string;
  loadingText?: string;
}

const Button: React.FC<ButtonProps> = (props) => {

  return (
    <TaroButton>
      {/* {
        props.loading
          ? ()
            : ()
      } */}
    </TaroButton>
  );
};

export default Button;
