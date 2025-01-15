import React, { memo, useState } from 'react';
import { Pressable, ViewStyle, TextStyle, StyleProp, PressableProps } from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import Typography from '../Typography';
import Icon from '../Icon/Icon';

type PressableButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  testID?: string;
} & PressableProps;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const PressableButton: React.FC<PressableButtonProps> = ({
  onPress,
  children,
  style,
  testID,
  ...props
}) => {
  const scale = useSharedValue(1);
  const [isPressed, setIsPressed] = useState(false);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(scale.value, { damping: 10, stiffness: 200 }) }],
  }));

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
  };

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[buttonStyles, style, animatedStyle]}
      testID={testID}
      {...props}>
      {children}
    </AnimatedPressable>
  );
};

export default memo(PressableButton);
