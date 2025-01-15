import React from 'react';
import { render } from '@testing-library/react-native';
import TextInput from './TextInput';

describe('TextInput Component', () => {
  it('should render label correctly', () => {
    const { getByText } = render(<TextInput label="Username" placeholder="Enter username" />);

    expect(getByText('Username')).toBeTruthy();
  });

  it('should render with correct placeholder text', () => {
    const { getByPlaceholderText } = render(
      <TextInput label="Username" placeholder="Enter username" />
    );

    expect(getByPlaceholderText('Enter username')).toBeTruthy();
  });
});
