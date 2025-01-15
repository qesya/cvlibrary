import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../../../components';

const meta = {
    title: 'molecules/TextInput',
    component: TextInput,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, justifyContent: 'flex-start', flex: 1, backgroundColor: '#EFEFEF' }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
    },
};

export const WithError: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        errorMessage: 'Invalid email address',
        isMandatory: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Password',
        placeholder: 'Enter your password',
        editable: false,
    },
};

export const Multiline: Story = {
    args: {
        label: 'Description',
        placeholder: 'Enter your description',
        multiline: true,
        numberOfLines: 4,
    },
};

export const MultilineWithError: Story = {
    args: {
        label: 'Description',
        placeholder: 'Enter your description',
        multiline: true,
        numberOfLines: 4,
        errorMessage: 'Invalid description',
    },
};

export const WithHintText: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        hintText: 'This is hint text',
        isMandatory: true,
    },
};

export const CustomStyle: Story = {
    args: {
        label: 'Custom Input',
        placeholder: 'Styled input',
        style: { marginBottom: 40, borderWidth: 1, borderColor: 'blue' },
    },
};

export const WithAutoCompleteLoading: Story = {
    args: {
        label: 'Autocomplete Suggestion',
        placeholder: 'Styled input',
        isLoading: true,
    },
};

export const WithAutoCompleteSuggestion: Story = {
    args: {
        label: 'Autocomplete Suggestion',
        placeholder: 'Styled input',
        isLoading: false,
        suggestions: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'],
        showSuggestion: true,
        onSelectSuggestion: (val) => console.log('suggestion', val)
    },
};