import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
    FlatList,
    StyleProp,
    ViewStyle,
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    ReduceMotion,
} from 'react-native-reanimated';
import { useCVLThemeColors } from '@/hooks/useCVLThemeColors';
import { Icon, InputLabel, Typography } from '@/components/atoms';

export type SelectInputItem = {
    id: string | number;
    value: string;
};

export type SelectInputProps = {
    label?: string;
    items: SelectInputItem[];
    onSelect: (item: SelectInputItem) => void;
    placeholder?: string;
    style?: StyleProp<ViewStyle>;
    errorMessage?: string;
    isMandatory?: boolean;
    customLabelColor?: string;
};

const SelectInput: React.FC<SelectInputProps> = ({
    label,
    items,
    onSelect,
    placeholder,
    errorMessage,
    isMandatory = false,
    customLabelColor,
    style
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<SelectInputItem | null>(null);
    const dropdownHeight = useSharedValue(0);

    const { black, white, disableColor, gray100 } = useCVLThemeColors();

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
        dropdownHeight.value = withSpring(isOpen ? 0 : Math.min(items.length * 40, 200), {
            duration: 1251,
            dampingRatio: 0.5,
            stiffness: 72,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 2,
            reduceMotion: ReduceMotion.System,
        });
    };

    const handleSelect = (item: SelectInputItem) => {
        setSelectedItem(item);
        onSelect(item);
        toggleDropdown();
    };

    const dropdownStyle = useAnimatedStyle(() => ({
        height: dropdownHeight.value,
        opacity: dropdownHeight.value > 0 ? 1 : 0,
    }));

    return (
        <View style={styles.container}>
            <InputLabel
                label={label}
                isError={errorMessage ? errorMessage.length > 0 : false}
                isMandatory={isMandatory}
                customColor={customLabelColor}
                style={styles.labelGap}
            />
            <TouchableWithoutFeedback testID="select-input-button" onPress={toggleDropdown}>
                <View style={[styles.input, { backgroundColor: white }, style]}>
                    <Typography testID="select-input-selected-item" size="lg" color={selectedItem ? black : disableColor}>
                        {selectedItem?.value || placeholder || 'Select an option'}
                    </Typography>
                    <Icon
                        icon="dropdown-outline-icon"
                        width={8}
                        height={8}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.dropdown, { backgroundColor: white }, dropdownStyle]}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback onPress={() => handleSelect(item)}>
                            <View style={[styles.dropdownItem, { borderBottomColor: gray100 }]}>
                                <Text testID={`select-item-${item.id}`} style={[styles.dropdownItemText, { color: black }]}>{item.value}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    bounces={false}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    label: {
        marginBottom: 8,
    },
    input: {
        paddingHorizontal: 16,
        height: 45,
        fontSize: 16,
        borderRadius: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    placeholder: {
        fontFamily: 'OpenSans-Regular',
    },
    dropdown: {
        position: 'absolute',
        zIndex: 9999,
        top: 90,
        left: 0,
        right: 0,
        borderRadius: 3,
        overflow: 'hidden',
    },
    dropdownItem: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
    },
    dropdownItemText: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
    },
    labelGap: {
        marginBottom: 4,
    }
});

export default React.memo(SelectInput);
