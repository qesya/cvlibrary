import { Colors } from '@/constants/Colors';
import { useResponsiveSize } from '@/utils/responsive-utils';
import React, { memo } from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';

export const FONT_WEIGHTS = {
  thin: 'OpenSans-Light',
  regular: 'OpenSans-Regular',
  semiBold: 'OpenSans-SemiBold',
  bold: 'OpenSans-Bold',
};

export const FONT_SIZES = {
  'xs': 10,
  'sm': 12,
  'md': 14,
  'lg': 16,
  'xl': 18,
  '2xl': 20,
  '3xl': 24,
  '4xl': 30,
  '5xl': 36,
};


interface TypographyProps extends TextProps {
  size?: keyof typeof FONT_SIZES;
  weight?: keyof typeof FONT_WEIGHTS;
  style?: StyleProp<TextStyle>;
  color?: string;
  centerText?: boolean;
  numberOfLines?: number;
}

const Typography: React.FC<TypographyProps> = ({
  size = 'lg',
  weight = 'regular',
  style,
  children,
  color = Colors.light.black,
  centerText,
  ...props
}) => {
  const fontSize = useResponsiveSize(FONT_SIZES[size]);
  const fontFamily = FONT_WEIGHTS[weight];

  return (
    <Text
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
      style={[
        { fontSize, fontFamily },
        { color, textAlign: centerText ? 'center' : 'left' },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default memo(Typography);
