import React, { memo, useState } from 'react';
import { Pressable, ViewStyle, TextStyle, StyleProp, ActivityIndicator } from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import Typography from '../Typography';
import Icon, { BUTTON_ICON_TYPES } from '../Icon/Icon';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { useCVLThemeColors } from '@/hooks/useCVLThemeColors';

export type ButtonType = 'primary' | 'outline' | 'ghost';

type ButtonProps = {
  type: ButtonType;
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: keyof typeof BUTTON_ICON_TYPES;
  iconPosition?: 'left' | 'right';
  iconWidth?: number;
  iconHeight?: number;
  customIconColor?: string;
  customIconColorPressed?: string;
  withUnderlineText?: boolean;
  isLoading?: boolean;
  lightColor?: string;
  darkColor?: string;
  disabled?: boolean;
  customButtonTextColor?: string;
  testID?: string;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
type ColorKey = keyof typeof Colors.light;

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  onPress,
  style,
  icon,
  iconPosition = 'left',
  iconWidth = 16,
  iconHeight = 16,
  customIconColor,
  customIconColorPressed,
  withUnderlineText,
  isLoading,
  disabled,
  customButtonTextColor,
  testID,
}) => {
  const scale = useSharedValue(1);
  const [isPressed, setIsPressed] = useState(false);

  /**
   * COLORS
   */
  const {
    greenLite,
    white,
    transparent,
    greenLite100,
    disableColor,
    black
  } = useCVLThemeColors()

  /**
   * ANIMATED STYLE
   */
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(scale.value, { damping: 10, stiffness: 200 }) }],
  }));

  const getButtonConfigColor = () => {
    const baseConfig = {
      borderWidth: 0,
      borderColor: greenLite,
      opacity: disabled ? 0.8 : 1,
    };

    const typeConfig = {
      primary: {
        backgroundColor: disabled
          ? disableColor
          : isPressed
            ? greenLite100
            : greenLite,
        color: white,
      },
      outline: {
        borderWidth: 1,
        backgroundColor: isPressed ? greenLite : transparent,
        color: disabled
          ? disableColor
          : isPressed
            ? white
            : greenLite,
        borderColor: disabled ? disableColor : greenLite,
      },
      ghost: {
        backgroundColor: transparent,
        color: disabled ? disableColor : greenLite,
        borderWidth: 0,
        borderColor: greenLite,
      },
    };

    return { ...baseConfig, ...typeConfig[type] };
  };

  const handlePressIn = () => {
    setIsPressed(true);
    scale.value = 0.95;
  };

  const handlePressOut = () => {
    setIsPressed(false);
    scale.value = 1;
  };

  const buttonStyles: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 45,
    ...getButtonConfigColor(),
  };

  const textStyles: TextStyle = {
    color: customButtonTextColor ?? getButtonConfigColor().color,
    textDecorationLine: withUnderlineText ? 'underline' : 'none',
  };

  const iconColor = customIconColor ?? type === "outline" ? greenLite : white;

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[buttonStyles, style, animatedStyle]}
      disabled={disabled}
      testID={testID}>
      {isLoading ? (
        <ActivityIndicator size="small" color={iconColor} />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <Icon
              icon={icon}
              height={iconHeight}
              width={iconWidth}
              fill={isPressed ? (customIconColorPressed ?? white) : iconColor}
              style={{ marginRight: 8 }}
            />
          )}
          <Typography style={textStyles} size="lg" weight="semiBold">
            {title}
          </Typography>
          {icon && iconPosition === 'right' && (
            <Icon
              icon={icon}
              height={iconHeight}
              width={iconWidth}
              style={{ marginLeft: 8 }}
              fill={isPressed ? (customIconColorPressed ?? white) : iconColor}
            />
          )}
        </>
      )}
    </AnimatedPressable>
  );
};

export default memo(Button);
