import React, { useState } from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { JobCategoryGrid } from '../../../components';

const meta = {
    title: 'organisms/JobCategoryGrid',
    component: JobCategoryGrid,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, justifyContent: 'center', flex: 1, }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof JobCategoryGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TwoTabsOneColumn: Story = {
    args: {
        segmentedTabs: {
            tabs: ['Jobs by Location', 'Jobs by Industry'],
            onTabChange: (index) => console.log('selected index', index)
        },
        currentIndex: 1,
        onPressCategory: (selectedItem) => console.log('selected item', selectedItem),
        segments: {
            'Jobs by Location': {
                items: [
                    { id: '1', label: 'Test 1' },
                    { id: '2', label: 'Test 2' },
                    { id: '3', label: 'Test 3' },
                    { id: '4', label: 'Test 4' },
                    { id: '5', label: 'Test 5' },
                    { id: '6', label: 'Test 6' },
                    { id: '7', label: 'Test 7' },
                ],
                columns: 1,
            },
            'Jobs by Industry': {
                items: [
                    { id: '1', label: 'Test 13' },
                    { id: '2', label: 'Test 14' },
                    { id: '3', label: 'Test 15' },
                    { id: '4', label: 'Test 16' },
                    { id: '5', label: 'Test 17' },
                    { id: '6', label: 'Test 18' },
                ],
                columns: 1,
            },
        },
    },
    render: (props) => {
        const [selectedIdx, setSelectedIdx] = useState<number>(0);

        return (
            <View>
                <JobCategoryGrid
                    segmentedTabs={{
                        tabs: ['Jobs by Location', 'Jobs by Industry'],
                        onTabChange: (index) => setSelectedIdx(index),
                    }}
                    currentIndex={selectedIdx}
                    segments={{
                        'Jobs by Location': {
                            items: [
                                { id: '1', label: 'Test 1' },
                                { id: '2', label: 'Test 2' },
                                { id: '3', label: 'Test 3' },
                                { id: '4', label: 'Test 4' },
                                { id: '5', label: 'Test 5' },
                                { id: '6', label: 'Test 6' },
                                { id: '7', label: 'Test 7' },
                            ],
                            columns: 1,
                        },
                        'Jobs by Industry': {
                            items: [
                                { id: '1', label: 'Test 13' },
                                { id: '2', label: 'Test 14' },
                                { id: '3', label: 'Test 15' },
                                { id: '4', label: 'Test 16' },
                                { id: '5', label: 'Test 17' },
                                { id: '6', label: 'Test 18' },
                            ],
                            columns: 1,
                        },
                    }}
                    onPressCategory={(categoryItem) => console.log(categoryItem)}
                />

            </View>
        )
    }
};

export const TwoTabsTwoColumns: Story = {
    args: {
        segmentedTabs: {
            tabs: ['Jobs by Location', 'Jobs by Industry'],
            onTabChange: (index) => console.log('selected index', index)
        },
        currentIndex: 1,
        onPressCategory: (selectedItem) => console.log('selected item', selectedItem),
        segments: {
            'Jobs by Location': {
                items: [
                    { id: '1', label: 'Test 1' },
                    { id: '2', label: 'Test 2' },
                    { id: '3', label: 'Test 3' },
                    { id: '4', label: 'Test 4' },
                    { id: '5', label: 'Test 5' },
                    { id: '6', label: 'Test 6' },
                    { id: '7', label: 'Test 7' },
                    { id: '8', label: 'Test 8' },
                    { id: '9', label: 'Test 9' },
                    { id: '10', label: 'Test 10' },
                    { id: '11', label: 'Test 11' },
                    { id: '12', label: 'Test 12' },
                ],
                columns: 2,
            },
            'Jobs by Industry': {
                items: [
                    { id: '1', label: 'Test 13' },
                    { id: '2', label: 'Test 14' },
                    { id: '3', label: 'Test 15' },
                    { id: '4', label: 'Test 16' },
                    { id: '5', label: 'Test 17' },
                    { id: '6', label: 'Test 18' },
                    { id: '7', label: 'Test 19' },
                    { id: '8', label: 'Test 20' },
                    { id: '9', label: 'Test 21' },
                    { id: '10', label: 'Test 22' },
                    { id: '11', label: 'Test 23' },
                    { id: '12', label: 'Test 24' },
                ],
                columns: 2,
            },
        },
    },
    render: (props) => {
        const [selectedIdx, setSelectedIdx] = useState<number>(0);

        return (
            <View>
                <JobCategoryGrid
                    segmentedTabs={{
                        tabs: ['Jobs by Location', 'Jobs by Industry'],
                        onTabChange: (index) => setSelectedIdx(index),
                    }}
                    currentIndex={selectedIdx}
                    segments={{
                        'Jobs by Location': {
                            items: [
                                { id: '1', label: 'Test 1' },
                                { id: '2', label: 'Test 2' },
                                { id: '3', label: 'Test 3' },
                                { id: '4', label: 'Test 4' },
                                { id: '5', label: 'Test 5' },
                                { id: '6', label: 'Test 6' },
                                { id: '7', label: 'Test 7' },
                                { id: '8', label: 'Test 8' },
                                { id: '9', label: 'Test 9' },
                                { id: '10', label: 'Test 10' },
                                { id: '11', label: 'Test 11' },
                                { id: '12', label: 'Test 12' },
                            ],
                            columns: 2,
                        },
                        'Jobs by Industry': {
                            items: [
                                { id: '1', label: 'Test 13' },
                                { id: '2', label: 'Test 14' },
                                { id: '3', label: 'Test 15' },
                                { id: '4', label: 'Test 16' },
                                { id: '5', label: 'Test 17' },
                                { id: '6', label: 'Test 18' },
                                { id: '7', label: 'Test 19' },
                                { id: '8', label: 'Test 20' },
                                { id: '9', label: 'Test 21' },
                                { id: '10', label: 'Test 22' },
                                { id: '11', label: 'Test 23' },
                                { id: '12', label: 'Test 24' },
                            ],
                            columns: 2,
                        },
                    }}
                    onPressCategory={(categoryItem) => console.log(categoryItem)}
                />

            </View>
        )
    }
};

export const TwoTabsThreeColumns: Story = {
    args: {
        segmentedTabs: {
            tabs: ['Jobs by Location', 'Jobs by Industry'],
            onTabChange: (index) => console.log('selected index', index)
        },
        currentIndex: 1,
        onPressCategory: (selectedItem) => console.log('selected item', selectedItem),
        segments: {
            'Jobs by Location': {
                items: [
                    { id: '1', label: 'Test 1' },
                    { id: '2', label: 'Test 2' },
                    { id: '3', label: 'Test 3' },
                    { id: '4', label: 'Test 4' },
                    { id: '5', label: 'Test 5' },
                    { id: '6', label: 'Test 6' },
                    { id: '7', label: 'Test 7' },
                    { id: '8', label: 'Test 8' },
                    { id: '9', label: 'Test 9' },
                    { id: '10', label: 'Test 10' },
                    { id: '11', label: 'Test 11' },
                    { id: '12', label: 'Test 12' },
                ],
                columns: 3,
            },
            'Jobs by Industry': {
                items: [
                    { id: '1', label: 'Test 13' },
                    { id: '2', label: 'Test 14' },
                    { id: '3', label: 'Test 15' },
                    { id: '4', label: 'Test 16' },
                    { id: '5', label: 'Test 17' },
                    { id: '6', label: 'Test 18' },
                    { id: '7', label: 'Test 19' },
                    { id: '8', label: 'Test 20' },
                    { id: '9', label: 'Test 21' },
                    { id: '10', label: 'Test 22' },
                    { id: '11', label: 'Test 23' },
                    { id: '12', label: 'Test 24' },
                ],
                columns: 3,
            },
        },
    },
    render: (props) => {
        const [selectedIdx, setSelectedIdx] = useState<number>(0);

        return (
            <View>
                <JobCategoryGrid
                    segmentedTabs={{
                        tabs: ['Jobs by Location', 'Jobs by Industry'],
                        onTabChange: (index) => setSelectedIdx(index),
                    }}
                    currentIndex={selectedIdx}
                    segments={{
                        'Jobs by Location': {
                            items: [
                                { id: '1', label: 'Test 1' },
                                { id: '2', label: 'Test 2' },
                                { id: '3', label: 'Test 3' },
                                { id: '4', label: 'Test 4' },
                                { id: '5', label: 'Test 5' },
                                { id: '6', label: 'Test 6' },
                                { id: '7', label: 'Test 7' },
                                { id: '8', label: 'Test 8' },
                                { id: '9', label: 'Test 9' },
                                { id: '10', label: 'Test 10' },
                                { id: '11', label: 'Test 11' },
                                { id: '12', label: 'Test 12' },
                            ],
                            columns: 3,
                        },
                        'Jobs by Industry': {
                            items: [
                                { id: '1', label: 'Test 13' },
                                { id: '2', label: 'Test 14' },
                                { id: '3', label: 'Test 15' },
                                { id: '4', label: 'Test 16' },
                                { id: '5', label: 'Test 17' },
                                { id: '6', label: 'Test 18' },
                                { id: '7', label: 'Test 19' },
                                { id: '8', label: 'Test 20' },
                                { id: '9', label: 'Test 21' },
                                { id: '10', label: 'Test 22' },
                                { id: '11', label: 'Test 23' },
                                { id: '12', label: 'Test 24' },
                            ],
                            columns: 3,
                        },
                    }}
                    onPressCategory={(categoryItem) => console.log(categoryItem)}
                />

            </View>
        )
    }
};

export const ThreeTabsThreeColumns: Story = {
    args: {
        segmentedTabs: {
            tabs: ['Jobs by Location', 'Jobs by Industry', 'Jobs by Test'],
            onTabChange: (index) => console.log('selected index', index)
        },
        currentIndex: 1,
        onPressCategory: (selectedItem) => console.log('selected item', selectedItem),
        segments: {
            'Jobs by Location': {
                items: [
                    { id: '1', label: 'Test 1' },
                    { id: '2', label: 'Test 2' },
                    { id: '3', label: 'Test 3' },
                    { id: '4', label: 'Test 4' },
                    { id: '5', label: 'Test 5' },
                    { id: '6', label: 'Test 6' },
                    { id: '7', label: 'Test 7' },
                    { id: '8', label: 'Test 8' },
                    { id: '9', label: 'Test 9' },
                    { id: '10', label: 'Test 10' },
                    { id: '11', label: 'Test 11' },
                    { id: '12', label: 'Test 12' },
                ],
                columns: 3,
            },
            'Jobs by Industry': {
                items: [
                    { id: '1', label: 'Test 13' },
                    { id: '2', label: 'Test 14' },
                    { id: '3', label: 'Test 15' },
                    { id: '4', label: 'Test 16' },
                    { id: '5', label: 'Test 17' },
                    { id: '6', label: 'Test 18' },
                    { id: '7', label: 'Test 19' },
                    { id: '8', label: 'Test 20' },
                    { id: '9', label: 'Test 21' },
                    { id: '10', label: 'Test 22' },
                    { id: '11', label: 'Test 23' },
                    { id: '12', label: 'Test 24' },
                ],
                columns: 3,
            },
            'Jobs by Test': {
                items: [
                    { id: '1', label: 'Test 13' },
                    { id: '2', label: 'Test 14' },
                    { id: '3', label: 'Test 15' },
                    { id: '4', label: 'Test 16' },
                    { id: '5', label: 'Test 17' },
                    { id: '6', label: 'Test 18' },
                    { id: '7', label: 'Test 19' },
                    { id: '8', label: 'Test 20' },
                    { id: '9', label: 'Test 21' },
                    { id: '10', label: 'Test 22' },
                    { id: '11', label: 'Test 23' },
                    { id: '12', label: 'Test 24' },
                ],
                columns: 3,
            },
        },
    },
    render: (props) => {
        const [selectedIdx, setSelectedIdx] = useState<number>(0);

        return (
            <View>
                <JobCategoryGrid
                    segmentedTabs={{
                        tabs: ['Test 1', 'Test 2', 'Test 3'],
                        onTabChange: (index) => setSelectedIdx(index),
                    }}
                    currentIndex={selectedIdx}
                    segments={{
                        'Test 1': {
                            items: [
                                { id: '1', label: 'Test 1' },
                                { id: '2', label: 'Test 2' },
                                { id: '3', label: 'Test 3' },
                                { id: '4', label: 'Test 4' },
                                { id: '5', label: 'Test 5' },
                                { id: '6', label: 'Test 6' },
                                { id: '7', label: 'Test 7' },
                                { id: '8', label: 'Test 8' },
                                { id: '9', label: 'Test 9' },
                                { id: '10', label: 'Test 10' },
                                { id: '11', label: 'Test 11' },
                                { id: '12', label: 'Test 12' },
                            ],
                            columns: 3,
                        },
                        'Test 2': {
                            items: [
                                { id: '1', label: 'Test 13' },
                                { id: '2', label: 'Test 14' },
                                { id: '3', label: 'Test 15' },
                                { id: '4', label: 'Test 16' },
                                { id: '5', label: 'Test 17' },
                                { id: '6', label: 'Test 18' },
                                { id: '7', label: 'Test 19' },
                                { id: '8', label: 'Test 20' },
                                { id: '9', label: 'Test 21' },
                                { id: '10', label: 'Test 22' },
                                { id: '11', label: 'Test 23' },
                                { id: '12', label: 'Test 24' },
                            ],
                            columns: 3,
                        },
                        'Test 3': {
                            items: [
                                { id: '1', label: 'Test 25' },
                                { id: '2', label: 'Test 26' },
                                { id: '3', label: 'Test 27' },
                                { id: '4', label: 'Test 28' },
                                { id: '5', label: 'Test 29' },
                                { id: '6', label: 'Test 30' },
                                { id: '7', label: 'Test 31' },
                                { id: '8', label: 'Test 32' },
                                { id: '9', label: 'Test 33' },
                                { id: '10', label: 'Test 34' },
                                { id: '11', label: 'Test 35' },
                                { id: '12', label: 'Test 36' },
                            ],
                            columns: 3,
                        }}
                    }
                    onPressCategory={(categoryItem) => console.log(categoryItem)}
                />

            </View>
        )
    }
};