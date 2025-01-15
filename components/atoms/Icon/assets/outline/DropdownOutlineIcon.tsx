import React, { memo } from 'react';
import Svg, { Defs, G, Path, SvgProps } from 'react-native-svg';

interface IIconProps extends SvgProps {
    width: number;
    height: number;
    fill?: string;
    testID?: string;
}

const DropdownOutlineIcon = ({
    fill = '#333333',
    width = 22,
    height = 18,
    testID,
    ...props
}: IIconProps) => (
    <Svg width={width} height={height} viewBox="0 0 22 18" fill="none" testID={testID} {...props}>
        <Path d="M11 18L0.607695 1.9576e-06L21.3923 1.40549e-07L11 18Z" fill={fill} />
    </Svg>
);

export default memo(DropdownOutlineIcon);
