import { SegmentedTab, TextGrid } from '@/components/molecules';
import { useCVLThemeColors } from '@/hooks/useCVLThemeColors';
import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { SegmentedTabProps } from '../../molecules/SegmentedTab/SegmentedTab';
import { TextGridItem } from '@/components/molecules/TextGrid/TextGrid';
import { TextGridProps } from '../../molecules/TextGrid/TextGrid';

interface JobCategoryGridProps {
  segmentedTabs: SegmentedTabProps;
  currentIndex: number;
  segments: {
    [key: string]: Omit<TextGridProps, 'textStyle' | 'itemStyle' | 'style' | 'onItemPress'>;
  };
  onPressCategory: (categoryItem: TextGridItem) => void;
  gridStyle?: StyleProp<ViewStyle>
}

const JobCategoryGrid: React.FC<JobCategoryGridProps> = ({
  segmentedTabs,
  currentIndex,
  segments,
  onPressCategory,
  gridStyle,
}) => {
  const { blue, white } = useCVLThemeColors();

  const activeSegmentKey = Object.keys(segments)[currentIndex];

  return (
    <View style={styles.container}>
      <SegmentedTab {...segmentedTabs} />
      <View style={[styles.segmentedWrapper, { backgroundColor: blue }]}>
        <TextGrid
          {...segments[activeSegmentKey]}
          onItemPress={onPressCategory}
          textStyle={{ color: white }}
          style={gridStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  segmentedWrapper: {
    backgroundColor: 'red',
    padding: 10,
    paddingVertical: 22,
  },
});

export default React.memo(JobCategoryGrid);
