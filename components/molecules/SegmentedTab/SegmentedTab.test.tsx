import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SegmentedTab from './SegmentedTab';

describe('SegmentedTab', () => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const mockOnTabChange = jest.fn();

  beforeEach(() => {
    mockOnTabChange.mockClear();
  });

  it('renders all tabs correctly', () => {
    const { getByText } = render(<SegmentedTab tabs={tabs} onTabChange={mockOnTabChange} />);

    tabs.forEach(tab => {
      expect(getByText(tab)).toBeTruthy();
    });
  });

  it('calls onTabChange with the correct index when a tab is pressed', () => {
    const { getAllByTestId } = render(<SegmentedTab tabs={tabs} onTabChange={mockOnTabChange} />);

    const tab1 = getAllByTestId('segmented-tab-test')[0];
    const tab2 = getAllByTestId('segmented-tab-test')[1];
    const tab3 = getAllByTestId('segmented-tab-test')[2];

    fireEvent.press(tab1);
    expect(mockOnTabChange).toHaveBeenCalledWith(0);

    fireEvent.press(tab2);
    expect(mockOnTabChange).toHaveBeenCalledWith(1);

    fireEvent.press(tab3);
    expect(mockOnTabChange).toHaveBeenCalledWith(2);
  });
});
