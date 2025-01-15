import { Input, Typography } from '@/components/atoms';
import { useCVLThemeColors } from '@/hooks/useCVLThemeColors';
import React from 'react';
import {
    View,
    StyleSheet,
    StyleProp,
    ViewStyle,
} from 'react-native';

type InputLabelProps = {
    label?: string;
    isMandatory?: boolean;
    isError?: boolean;
    customColor?: string;
    style?: StyleProp<ViewStyle>;
}

const InputLabel: React.FC<InputLabelProps> = ({
    label,
    isMandatory,
    customColor,
    isError = false,
    style,
}) => {

    const {
        errorColor,
        black
    } = useCVLThemeColors()

    return (
        <View style={[styles.container, style]}>
            {label ? (
                <Typography
                    style={styles.label} size="lg" weight="regular" color={isError ? errorColor : customColor ?? black}
                    testID="input-label-text"
                >
                    {label}
                    {isMandatory ? (
                        <Typography
                            style={styles.mandatoryLabel}
                            size="lg"
                            weight="semiBold"
                            testID="input-label-mandatory-label"
                            color={isError ? errorColor : black}>
                            {' '}
                            *
                        </Typography>
                    ) : null}
                </Typography>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    label: {
        marginBottom: 8,
    },
    mandatoryLabel: {
        marginLeft: 4,
    },
});

export default React.memo(InputLabel);
