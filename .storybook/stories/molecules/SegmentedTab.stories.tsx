import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedTab } from '../../../components';

const meta = {
    title: 'molecules/SegmentedTab',
    component: SegmentedTab,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, justifyContent: 'center', flex: 1, backgroundColor: '#EFEFEF' }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof SegmentedTab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TwoTabs: Story = {
    args: {
        tabs: ['Jobs by Location', 'Jobs by Industry'],
        onTabChange: (index) => console.log('selected index', index)
    },
};

export const ThreeTabs: Story = {
    args: {
        tabs: ['Test 1', 'Test 2', 'Test 3'],
        onTabChange: (index) => console.log('selected index', index)
    },
};
