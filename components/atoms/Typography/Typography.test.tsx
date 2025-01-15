import React from 'react';
import { render } from '@testing-library/react-native';
import Typography from './Typography';

describe('Typography Component', () => {
  it('should render correctly with default props', () => {
    const { getByText } = render(<Typography>Test Text</Typography>);
    const text = getByText('Test Text');
    expect(text).toBeTruthy();
  });

  it('should apply the correct font size for "body1" size', () => {
    const { getByText } = render(<Typography size="lg">Test Text</Typography>);
    const text = getByText('Test Text');
    expect(text.props.style[0].fontSize).toBeGreaterThan(16);
  });

  it('should apply the correct font weight for "bold"', () => {
    const { getByText } = render(<Typography weight="bold">Bold Text</Typography>);
    const text = getByText('Bold Text');
    expect(text.props.style[0].fontFamily).toBe('OpenSans-Bold');
  });

  it('should render with custom style', () => {
    const { getByText } = render(
      <Typography size="lg" color="red">
        Custom Style Text
      </Typography>
    );
    const text = getByText('Custom Style Text');
    expect(text.props.style[1].color).toBe('red');
  });

  it('should render with correct responsive font size', () => {
    const { getByText } = render(<Typography size="lg">Responsive Text</Typography>);
    const text = getByText('Responsive Text');
    expect(text.props.style[0].fontSize).toBeGreaterThan(16);
  });
});
