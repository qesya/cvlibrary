import React, { memo } from 'react';
import Svg, { Defs, G, Path, SvgProps } from 'react-native-svg';

interface IIconProps extends SvgProps {
  width: number;
  height: number;
  fill?: string;
  testID?: string;
}

const SearchOutlineIcon = ({
  fill = '#333333',
  width = 17,
  height = 17.139,
  testID,
  ...props
}: IIconProps) => (
  <Svg width={width} height={height} viewBox="0 0 17 17.139" testID={testID} {...props}>
    <G transform="translate(0)">
      <G transform="translate(0 0)">
        <Path d="M59.6,64.959l4.773,4.625a1.183,1.183,0,0,0,1.638.057l.5-.486a1.1,1.1,0,0,0-.061-1.592l-3.611-3.518,0,0L61.7,62.95" transform="translate(-49.817 -52.804)" fill={fill} />
        <Path d="M34.335,26.763a6.752,6.752,0,1,0,0,9.549A6.71,6.71,0,0,0,34.335,26.763Zm-1.769,7.78a4.252,4.252,0,1,1,1.244-3A4.223,4.223,0,0,1,32.566,34.543Z" transform="translate(-22.812 -24.786)" fill={fill} />
      </G>
    </G>
  </Svg>
);

export default memo(SearchOutlineIcon);
