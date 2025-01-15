import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Typography, FONT_SIZES } from '../../../components';

const meta = {
    title: 'atoms/Typography',
    component: Typography,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, alignItems: 'flex-start' }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RegularFontSizes: Story = {
    render: () => (
        <View style={{ gap: 8 }}>
            {Object.entries(FONT_SIZES).map(([size, value]) => (
                <Typography key={size} size={size as keyof typeof FONT_SIZES}>
                    {`${size} - ${value}px`}
                </Typography>
            ))}
        </View>
    ),
};

export const SemiBoldFontSizes: Story = {
    render: () => (
        <View style={{ gap: 8 }}>
            {Object.entries(FONT_SIZES).map(([size, value]) => (
                <Typography weight="semiBold" key={size} size={size as keyof typeof FONT_SIZES}>
                    {`${size} - ${value}px`}
                </Typography>
            ))}
        </View>
    ),
};

export const BoldFontSizes: Story = {
    render: () => (
        <View style={{ gap: 8 }}>
            {Object.entries(FONT_SIZES).map(([size, value]) => (
                <Typography weight="bold" key={size} size={size as keyof typeof FONT_SIZES}>
                    {`${size} - ${value}px`}
                </Typography>
            ))}
        </View>
    ),
};
