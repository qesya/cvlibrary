import React from 'react';
import { render } from '@testing-library/react-native';
import InputLabel from './InputLabel';

describe('InputLabel Component', () => {
  it('renders correctly with label', () => {
    const { getByTestId } = render(<InputLabel label="Username" />);
    const labelText = getByTestId('input-label-text');
    expect(labelText).toBeTruthy();
    expect(labelText.props.children).toContain('Username');
  });

  it('renders mandatory asterisk when isMandatory is true', () => {
    const { getByTestId } = render(<InputLabel label="Password" isMandatory />);
    const labelText = getByTestId('input-label-text');
    expect(labelText).toBeTruthy();
    expect(labelText.props.children).toContain('Password');
    const mandatoryLabel = getByTestId('input-label-mandatory-label');
    expect(mandatoryLabel).toBeTruthy();
    expect(mandatoryLabel.props.children).toContain('*');
  });

  it('does not render mandatory asterisk when isMandatory is false', () => {
    const { queryByTestId } = render(<InputLabel label="Email" isMandatory={false} />);
    const mandatoryLabel = queryByTestId('input-label-mandatory-label');
    expect(mandatoryLabel).toBeNull();
  });

  it('does not render label if label is not provided', () => {
    const { queryByTestId } = render(<InputLabel />);
    const labelText = queryByTestId('input-label-text');
    expect(labelText).toBeNull();
  });
});
