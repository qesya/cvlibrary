import { Typography } from '@/components/atoms';
import { useCVLThemeColors } from '@/hooks/useCVLThemeColors';
import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

export interface SegmentedTabProps {
  tabs: string[];
  onTabChange: (index: number) => void;
  currentIndex?: number;
}

const SegmentedTab: React.FC<SegmentedTabProps> = ({ tabs, onTabChange,currentIndex }) => {
  const [activeTab, setActiveTab] = useState(currentIndex ?? 0);
  const progress = useSharedValue(0);

  const {
    altBlue,
    blue,
    white,
    disableColor,
  } = useCVLThemeColors()

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    progress.value = withTiming(index, { duration: 200 });
    onTabChange(index);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;
        const isFirst = index === 0;
        const isLast = index === tabs.length - 1;

        const animatedStyle = useAnimatedStyle(() => {
          return {
            backgroundColor: interpolateColor(
              progress.value,
              tabs.map((_, i) => i),
              tabs.map((_, i) => (i === index ? blue : altBlue))
            ),
          };
        });

        return (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => handleTabPress(index)}
            testID="segmented-tab-test"
          >
            <Animated.View style={[styles.tab, animatedStyle, isFirst && styles.firstItem, isLast && styles.lastItem]}>
              <Typography testID="segmented-tab-text" color={isActive ? white : disableColor}>
                {tab}
              </Typography>
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
  },
  firstItem: {
    borderTopLeftRadius: 3,
  },
  lastItem: {
    borderTopRightRadius: 3,
  }
});

export default React.memo(SegmentedTab);
