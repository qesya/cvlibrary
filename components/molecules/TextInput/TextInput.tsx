import { Input, InputLabel, Typography } from '@/components/atoms';
import { useCVLThemeColors } from '@/hooks/useCVLThemeColors';
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextInputProps,
  TextStyle,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export type TextInputPropsExtended = {
  label?: string;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  errorMessage?: string | null;
  hintText?: string;
  isMandatory?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  textInputBottomSheetMode?: boolean;
  customLabelColor?: string;
  suggestions?: string[];
  onSelectSuggestion?: (suggestion: string) => void;
  isLoading?: boolean;
  showSuggestion?: boolean
} & TextInputProps;

const TextInput: React.FC<TextInputPropsExtended> = ({
  label,
  placeholder,
  style,
  errorMessage,
  isMandatory,
  hintText,
  inputStyle,
  textInputBottomSheetMode = false,
  customLabelColor,
  suggestions = [],
  onSelectSuggestion,
  showSuggestion = false,
  isLoading = false,
  ...inputProps
}) => {
  const { errorColor, black, white, blue, gray100 } = useCVLThemeColors();

  const handleSuggestionSelect = (suggestion: string) => {
    if (onSelectSuggestion) {
      onSelectSuggestion(suggestion);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <InputLabel
        label={label}
        isError={errorMessage ? errorMessage.length > 0 : false}
        isMandatory={isMandatory}
        customColor={customLabelColor}
        style={styles.gapLabel}
      />
      <Input
        placeholder={placeholder}
        value={inputProps.value}
        onChangeText={inputProps.onChangeText}
        style={[
          errorMessage && {
            borderColor: errorColor,
            borderWidth: 1,
          },
          inputStyle,
        ]}
        {...inputProps}
      />
      {hintText ? (
        <View style={styles.errorWrapper}>
          <Typography size="md" weight="regular">
            {hintText}
          </Typography>
        </View>
      ) : null}
      {errorMessage ? (
        <View style={styles.errorWrapper}>
          <Typography size="md" weight="semiBold" color={errorColor}>
            {errorMessage}
          </Typography>
        </View>
      ) : null}

      {isLoading ? (
        <View style={[styles.loadingWrapper, { backgroundColor: white }]}>
          <ActivityIndicator size="small" color={blue} />
        </View>
      ) : showSuggestion ? (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSuggestionSelect(item)} style={styles.suggestionItemList}>
              <View style={styles.suggestionItem}>
                <Typography size="lg" weight="regular" color={black}>
                  {item}
                </Typography>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={{ width: '100%', height: 1, backgroundColor: gray100 }} />}
          style={[styles.suggestionsList, { backgroundColor: white }]}
        />
      ) : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  gapLabel: {
    marginBottom: 4,
  },
  errorWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  suggestionsList: {
    maxHeight: 200,
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderRadius: 3,
  },
  suggestionItem: {
    padding: 8,
  },
  loadingWrapper: {
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  suggestionItemList: {
    paddingVertical: 6,
  },
});

export default React.memo(TextInput);
