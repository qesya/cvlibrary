import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from '../../../constants/Colors';
import { Typography } from '../../../components'

const meta = {
    title: 'atoms/Colors',
    component: View,
    decorators: [
        (Story) => (
            <ScrollView>
                <View style={{ padding: 10, justifyContent: 'flex-start', flex: 1, backgroundColor: '#FFFFFF' }}>
                    <Story />
                </View>
            </ScrollView>
        ),
    ],
} satisfies Meta<typeof View>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
    render: () => (
        <View style={styles.gap}>
            <Typography weight="bold" size="3xl">LIGHT</Typography>
            <View style={[styles.colorContainer, {marginBottom: 24}]}>
                {Object.entries(Colors.light).map(([colorName, colorValue], index) => (
                    <View key={index} style={styles.colorBox}>
                        <View
                            style={[
                                styles.colorSample,
                                { backgroundColor: colorValue },
                            ]}
                        />
                        <Typography size="lg">{colorName}</Typography>
                    </View>
                ))}
            </View>
        </View>
    ),
};

const styles = StyleSheet.create({
    colorContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 24,
        // justifyContent: 'center',
    },
    colorBox: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    colorSample: {
        width: 60,
        height: 60,
        borderRadius: 6,
    },
    gap: {
        gap: 24,
    }
});
