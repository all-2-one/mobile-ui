import { View } from '@tarojs/components';
import classNames from 'classnames';
import { prefix } from '../common/utils/constant';

import './index.less';

export interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = (props) => {
  return (
    <View
      className={classNames({
        iconfont: true,
        [`icon-${props.name}`]: props.name,
        [`${prefix}-icon`]: true
      })}
    />
  );
};

export default Icon;
