import { Typography } from '@/components/atoms';
import { PressableButton } from '@/components/atoms/Button';
import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

export type TextGridItem = {
    id: string | number;
    label: string;
};

export type TextGridProps = {
    items: TextGridItem[];
    columns: number;
    onItemPress: (item: TextGridItem) => void;
    style?: StyleProp<ViewStyle>;
    itemStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

const TextGrid: React.FC<TextGridProps> = ({
    items,
    columns,
    onItemPress,
    style,
    itemStyle,
    textStyle,
}) => {
    const rows = Math.ceil(items.length / columns);

    return (
        <View style={[styles.container, style]}>
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <View key={`row-${rowIndex}`} style={styles.row}>
                    {items
                        .slice(rowIndex * columns, rowIndex * columns + columns)
                        .map((item) => (
                            <PressableButton
                                key={item.id}
                                style={[styles.item, itemStyle]}
                                onPress={() => onItemPress(item)}
                                testID={`text-grid-item-${item.id}`}
                            >
                                <Typography testID={`text-grid-text-${item.id}`} style={[textStyle]}>{item.label}</Typography>
                            </PressableButton>
                        ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 8,
       
    },
    item: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});

export default React.memo(TextGrid);
