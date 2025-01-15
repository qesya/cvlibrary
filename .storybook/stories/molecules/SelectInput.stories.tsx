import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectInput } from '../../../components';

const meta = {
    title: 'molecules/SelectInput',
    component: SelectInput,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, justifyContent: 'center', flex: 1, backgroundColor: '#EFEFEF' }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof SelectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
    args: {
        items: [
            {
                id: '1',
                value: '15 Miles'
            },
            {
                id: '2',
                value: '30 Miles'
            },
            {
                id: '3',
                value: '45 Miles'
            },
            {
                id: '4',
                value: '60 Miles'
            }
        ],
        label: 'Distance',
        onSelect: (selectedItem) => console.log('selectedItem', selectedItem),
    },
};

export const WithoutLabel: Story = {
    args: {
        items: [
            {
                id: '1',
                value: '15 Miles'
            },
            {
                id: '2',
                value: '30 Miles'
            },
            {
                id: '3',
                value: '45 Miles'
            },
            {
                id: '4',
                value: '60 Miles'
            }
        ],
        onSelect: (selectedItem) => console.log('selectedItem', selectedItem),
    },
};
