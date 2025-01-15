import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextGrid from './TextGrid';

describe('TextGrid Component', () => {
  const mockOnItemPress = jest.fn();

  const items = [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    { id: 4, label: 'Item 4' },
  ];

  it('should render all items in the grid', () => {
    const { getByTestId } = render(
      <TextGrid items={items} columns={2} onItemPress={mockOnItemPress} />
    );

    items.forEach((item) => {
      expect(getByTestId(`text-grid-item-${item.id}`)).toBeTruthy();
      expect(getByTestId(`text-grid-text-${item.id}`).props.children).toBe(item.label);
    });
  });

  it('should call onItemPress when an item is clicked', () => {
    const { getByTestId } = render(
      <TextGrid items={items} columns={2} onItemPress={mockOnItemPress} />
    );

    fireEvent.press(getByTestId('text-grid-item-1'));
    expect(mockOnItemPress).toHaveBeenCalledWith(items[0]);
    expect(mockOnItemPress).toHaveBeenCalledTimes(1);

    fireEvent.press(getByTestId('text-grid-item-2'));
    expect(mockOnItemPress).toHaveBeenCalledWith(items[1]);
    expect(mockOnItemPress).toHaveBeenCalledTimes(2);
  });
});
