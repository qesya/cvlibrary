import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../../components';

const meta = {
    title: 'atoms/Input',
    component: Input,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, justifyContent: 'center', flex: 1, backgroundColor: '#EFEFEF' }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text here...',
    },
};

export const WithValue: Story = {
    args: {
        placeholder: 'With Value',
        value: 'With Value',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled input',
        editable: false,
    },
};

export const PasswordInput: Story = {
    args: {
        placeholder: 'Enter your password',
        secureTextEntry: true,
    },
};

export const Multiline: Story = {
    args: {
        placeholder: 'Enter multiline text...',
        multiline: true,
        numberOfLines: 4,
    },
};