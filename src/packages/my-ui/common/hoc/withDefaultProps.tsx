import React from 'react';

export const withDefaultProps = <T = any> (Component: React.FC<T>, defaultProps: Partial<T>) => {
  return (props: Partial<T>) => {
    const fullProps = {
      ...defaultProps,
      ...props
    } as T;
    return <Component {...fullProps} />;
  };
};
