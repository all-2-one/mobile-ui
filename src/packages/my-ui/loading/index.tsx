import { View } from '@tarojs/components';
import React from 'react';
import classNames from 'classnames';
import { withDefaultProps } from '../common/hoc/withDefaultProps';
import { prefix } from '../common/utils/constant';

export interface LoadingProps {
  color: string,
  vertical: boolean,
  type: 'circular' | 'spinner',
  size: string,
  textSize: string,
}

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <View>
      <View></View>
      <View
        className={classNames({
          [`${prefix}-loading__text`]: true
        })}
      >
        {props.children}
      </View>
    </View>
  );
};

export default withDefaultProps<LoadingProps>(Loading, { type: 'circular' });
