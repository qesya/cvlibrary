import React, { memo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

// OUTLINE ICONS
import SearchOutlineIcon from './assets/outline/SearchOutlineIcon';
import DropdownOutlineIcon from './assets/outline/DropdownOutlineIcon';

export type IIconProps = {
    width?: number;
    height?: number;
    fill?: string;
    testID?: string;
};

export const BUTTON_ICON_TYPES = {
    'search-outline-icon': SearchOutlineIcon,
    'dropdown-outline-icon': DropdownOutlineIcon
};

export type IconProps = IIconProps & {
    icon: keyof typeof BUTTON_ICON_TYPES;
    style?: StyleProp<ViewStyle>;
};

const Icon: React.FC<IconProps> = ({ height = 24, width = 24, fill, icon, testID, style }) => {
    const IconComponent = BUTTON_ICON_TYPES[icon];
    return <IconComponent width={width} height={height} fill={fill} testID={testID} style={style} />;
};

export default memo(Icon);
