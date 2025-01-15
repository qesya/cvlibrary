import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SelectInput from './SelectInput';

describe('SelectInput Component', () => {
  const items = [
    { id: 1, value: 'Option 1' },
    { id: 2, value: 'Option 2' },
    { id: 3, value: 'Option 3' },
  ];

  const onSelectMock = jest.fn();

  it('renders correctly with placeholder', () => {
    const { getByTestId } = render(
      <SelectInput
        label="Test Label"
        items={items}
        onSelect={onSelectMock}
        placeholder="Select an option"
      />
    );

    const inputLabel = getByTestId('select-input-button');
    expect(inputLabel).toBeTruthy();
    expect(getByTestId('select-input-selected-item').props.children).toBe('Select an option');
  });

  it('opens and displays dropdown items on press', () => {
    const { getByTestId, queryByTestId } = render(
      <SelectInput
        label="Test Label"
        items={items}
        onSelect={onSelectMock}
        placeholder="Select an option"
      />
    );

    fireEvent.press(getByTestId('select-input-button'));

    expect(queryByTestId('select-item-1')).toBeTruthy();
    expect(queryByTestId('select-item-2')).toBeTruthy();
    expect(queryByTestId('select-item-3')).toBeTruthy();
  });

  it('selects an item and updates the selected value', () => {
    const { getByTestId, queryByTestId } = render(
      <SelectInput
        label="Test Label"
        items={items}
        onSelect={onSelectMock}
        placeholder="Select an option"
      />
    );

    fireEvent.press(getByTestId('select-input-button'));
    fireEvent.press(getByTestId('select-item-2'));

    expect(onSelectMock).toHaveBeenCalledWith({ id: 2, value: 'Option 2' });
    expect(getByTestId('select-input-selected-item').props.children).toBe('Option 2');
    expect(queryByTestId('select-item-1')?.props.children).toBe('Option 1')
  });

  it('renders mandatory label when isMandatory is true', () => {
    const { getByText } = render(
      <SelectInput
        label="Test Label"
        items={items}
        onSelect={onSelectMock}
        isMandatory
      />
    );

    expect(getByText('*')).toBeTruthy();
  });
});
