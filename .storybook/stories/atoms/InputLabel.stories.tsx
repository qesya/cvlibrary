import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { InputLabel } from '../../../components';

const meta = {
    title: 'atoms/InputLabel',
    component: InputLabel,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, alignItems: 'flex-start' }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof InputLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MandatoryLabel: Story = {
    args: {
        isMandatory: true,
        label: 'Username'
    }
};

export const NotMandatoryLabel: Story = {
    args: {
        isMandatory: false,
        label: 'Username'
    }
};

export const ErrorLabel: Story = {
    args: {
        isMandatory: true,
        isError: true,
        label: 'Username'
    }
};