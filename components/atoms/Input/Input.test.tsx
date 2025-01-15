import React from 'react';
import { render } from '@testing-library/react-native';
import Input from './Input';

describe('Input Component', () => {
  it('should render with the correct placeholder text', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter your username" />);

    expect(getByPlaceholderText('Enter your username')).toBeTruthy();
  });
});
