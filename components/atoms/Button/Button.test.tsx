import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';
import '@testing-library/react-native/extend-expect';

describe('Button Component', () => {
  it('should render Primary button with correct text', () => {
    const { getByText } = render(
      <Button type="primary" title="Primary Button" onPress={() => {}} />
    );
    const button = getByText('Primary Button');

    expect(button).toBeTruthy();
  });

  it('should trigger onPress event when clicked', () => {
    const mockPress = jest.fn();
    const { getByText } = render(
      <Button type="primary" title="Primary Button" onPress={mockPress} />
    );

    fireEvent.press(getByText('Primary Button'));

    expect(mockPress).toHaveBeenCalled();
  });
});
