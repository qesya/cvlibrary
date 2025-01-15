import React from 'react';
import { TextInput, TextInputProps, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { useCVLThemeColors } from '@/hooks/useCVLThemeColors';

type InputProps = TextInputProps & {
  style?: StyleProp<TextStyle>;
};

const Input: React.FC<InputProps> = ({ style, ...props }) => {
  const {
    black,
    transparent,
    white,
    disableColor,
  } = useCVLThemeColors()

  return (
    <TextInput
      style={[
        styles.input,
        props.multiline && styles.inputMultline,
        {
          borderColor: transparent,
          backgroundColor: props.editable === false ? disableColor : white,
          color: black,
        },
        style,
      ]}
      placeholderTextColor={disableColor}
      editable={props.editable}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 15,
    height: 45,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
  inputMultline: {
    height: 100,
    paddingVertical: 16,
    textAlignVertical: 'top',
  },
});

export default React.memo(Input);
