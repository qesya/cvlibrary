import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../../components';

const meta = {
    title: 'atoms/Button',
    component: Button,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, justifyContent: 'center', flex: 1 }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
    args: {
        onPress: fn(),
        title: 'Button',
        type: 'primary',
    },
    render: ({ ...props }) => (
        <View style={{gap: 12}}>
            <Button {...props} />
            <Button icon="search-outline-icon" {...props} />
            <Button icon="search-outline-icon" iconPosition="right" {...props} />
            <Button disabled {...props} />
        </View>
    )
};

export const OutlineButton: Story = {
    args: {
        onPress: fn(),
        title: 'Button',
        type: 'outline',
    },
    render: ({ ...props }) => (
        <View style={{gap: 12}}>
            <Button {...props} />
            <Button icon="search-outline-icon" {...props} />
            <Button icon="search-outline-icon" iconPosition="right" {...props} />
            <Button disabled {...props} />
        </View>
    )
};

export const GhostButton: Story = {
    args: {
        onPress: fn(),
        title: 'Button',
        type: 'ghost',
    },
    render: ({ ...props }) => (
        <View style={{gap: 12}}>
            <Button {...props} />
            <Button disabled {...props} />
        </View>
    )
};