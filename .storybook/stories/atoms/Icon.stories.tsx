import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../../components';
import { BUTTON_ICON_TYPES } from '../../../components/atoms/Icon/Icon';

const meta = {
    title: 'atoms/Icon',
    component: Icon,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, justifyContent: 'flex-start', flex: 1 }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
    args: {
        width: 24,
        height: 24,
        icon: "search-outline-icon"
    },
    render: () => (
        <View style={styles.iconContainer}>
            {Object.keys(BUTTON_ICON_TYPES).map((iconKey) => (
                <View key={iconKey} style={styles.iconWrapper}>
                    <Icon icon={iconKey as keyof typeof BUTTON_ICON_TYPES} width={40} height={40} />
                </View>
            ))}
        </View>
    ),
};

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'flex-start',
    },
    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
});
