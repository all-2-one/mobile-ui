import { View } from '@tarojs/components';
import { Icon } from '../../../packages/my-ui';
import icons from '../../../packages/my-ui/common/icon/iconfont.json';

const IconDemo = () => {
  return (
    <View>
      {icons.glyphs.map(icon => <Icon name={icon.name} key={icon.name} />)}
    </View>
  );
};

export default IconDemo;
