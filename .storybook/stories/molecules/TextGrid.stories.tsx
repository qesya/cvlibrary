import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { TextGrid } from '../../../components';

const meta = {
    title: 'molecules/TextGrid',
    component: TextGrid,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, justifyContent: 'center', flex: 1, backgroundColor: '#EFEFEF' }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof TextGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TwoColumns: Story = {
    args: {
        columns: 2,
        items: [
            {
                id: '1',
                label: 'Test 1'
            },
            {
                id: '2',
                label: 'Test 2'
            },
            {
                id: '3',
                label: 'Test 3'
            },
            {
                id: '4',
                label: 'Test 4'
            },
            {
                id: '5',
                label: 'Test 5'
            },
            {
                id: '6',
                label: 'Test 6'
            },
            {
                id: '7',
                label: 'Test 7'
            },
            {
                id: '8',
                label: 'Test 8'
            },
            {
                id: '9',
                label: 'Test 9'
            },
            {
                id: '10',
                label: 'Test 10'
            },
            {
                id: '11',
                label: 'Test 11'
            },
            {
                id: '12',
                label: 'Test 12'
            },
        ],
        onItemPress: (item) => console.log('selcted item', item)
    },
};
