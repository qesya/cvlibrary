import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import JobCategoryGrid from './JobCategoryGrid';
import { SegmentedTabProps } from '@/components/molecules/SegmentedTab/SegmentedTab';

const mockSegments = {
  'Jobs by Location': {
    items: [
      { id: '1', label: 'Test 1' },
      { id: '2', label: 'Test 2' },
      { id: '3', label: 'Test 3' },
      { id: '4', label: 'Test 4' },
    ],
    columns: 2,
  },
  'Jobs by Industry': {
    items: [
      { id: '1', label: 'Industry 1' },
      { id: '2', label: 'Industry 2' },
      { id: '3', label: 'Industry 3' },
      { id: '4', label: 'Industry 4' },
    ],
    columns: 2,
  },
};

const mockSegmentedTabs: SegmentedTabProps = {
  tabs: ['Jobs by Location', 'Jobs by Industry'],
  onTabChange: jest.fn(),
};

const mockOnPressCategory = jest.fn();

describe('JobCategoryGrid', () => {
    it('renders the segmented tabs correctly and handles tab changes', () => {
      const { getByText, getByTestId, getAllByTestId } = render(
        <JobCategoryGrid
          segmentedTabs={mockSegmentedTabs}
          currentIndex={0}
          segments={mockSegments}
          onPressCategory={mockOnPressCategory}
        />
      );
  
      getByText('Jobs by Location');
      getByTestId('text-grid-item-1');
      getByTestId('text-grid-item-2');
  
      fireEvent.press(getByText('Jobs by Industry'));
  
      getByText('Jobs by Industry');
      getByTestId('text-grid-item-1');
      getByTestId('text-grid-item-2');
  
      fireEvent.press(getAllByTestId('text-grid-item-1')[0]);
      expect(mockOnPressCategory).toHaveBeenCalledWith({
        id: '1',
        label: 'Test 1',
      });
    });
  });