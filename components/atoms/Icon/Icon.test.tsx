import React from 'react';
import { render } from '@testing-library/react-native';
import Icon from './Icon';

describe('Icon Component', () => {
  it('should render HomeOutlineIcon when "search-outline-icon" is passed as icon prop', async () => {
    const { findByTestId } = render(
      <Icon icon="search-outline-icon" testID="search-outline-icon-id" />
    );

    const homeOutlineIcon = await findByTestId('search-outline-icon-id');
    expect(homeOutlineIcon).toBeTruthy();
  });

  it('should apply width and height props correctly', async () => {
    const { findByTestId } = render(
      <Icon icon="search-outline-icon" width={50} height={50} testID="search-outline-icon-id" />
    );

    const homeOutlineIcon = await findByTestId('search-outline-icon-id');
    expect(homeOutlineIcon.props.width).toBe(50);
    expect(homeOutlineIcon.props.height).toBe(50);
  });

  it('should render with default width and height if not provided', async () => {
    const { findByTestId } = render(
      <Icon icon="search-outline-icon" testID="search-outline-icon-id" />
    );

    const homeOutlineIcon = await findByTestId('search-outline-icon-id');
    expect(homeOutlineIcon.props.width).toBe(24);
    expect(homeOutlineIcon.props.height).toBe(24);
  });
});
