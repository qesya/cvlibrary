import { Button, JobCategoryGrid, SelectInput, TextInput } from '@/components';
import { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useCVLThemeColors } from '@/hooks/useCVLThemeColors';
import { DISTANCE_DATA, JOBS_CATEGORY } from './find-jobs-data';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FormState } from '.';

interface IFindJobsView {
  values: {
    keywords: string;
    location: string;
    distance: string;
    currentJobsIndex: string;
  };
  handleChange: <K extends keyof FormState>(name: K, value: FormState[K]) => void;
  onPressFindJobsNow: () => void;
  suggestion: {
    isLoading: boolean;
    showSuggestion: boolean;
    suggestionList: string[];
  };
  debouncedLocationValue: string;
  handleDebouncedLocationChange: (text: string) => void;
  onHandleSuggestionSelect: (value: string) => void
}

function FindJobsView({
  handleChange,
  values,
  onPressFindJobsNow,
  suggestion,
  debouncedLocationValue,
  handleDebouncedLocationChange,
  onHandleSuggestionSelect,
}: IFindJobsView) {
  const inset = useSafeAreaInsets();
  const { white } = useCVLThemeColors();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.formWrapper}>
          <TextInput
            label="Keywords / Job Title / Job Ref"
            value={values.keywords}
            onChangeText={(text) => handleChange('keywords', text)}
            placeholder="e.g. Sales Executive"
            customLabelColor={white}
          />

          <View style={styles.rowFields}>
            <View style={styles.locationWrapper}>
              <TextInput
                label="Location"
                value={debouncedLocationValue}
                onChangeText={handleDebouncedLocationChange}
                placeholder="e.g. town or postcode"
                customLabelColor={white}
                isLoading={suggestion.isLoading}
                suggestions={suggestion.suggestionList}
                onSelectSuggestion={onHandleSuggestionSelect}
                showSuggestion={suggestion.showSuggestion}
              />
            </View>
            <View style={styles.distanceWrapper}>
              <SelectInput
                label="Distance"
                customLabelColor={white}
                placeholder="e.g. 15 Mile"
                items={DISTANCE_DATA}
                onSelect={(value) => handleChange('distance', value.value)}
              />
            </View>
          </View>

          <View style={styles.buttonWrapper}>
            <Button
              onPress={onPressFindJobsNow}
              title="Find jobs now"
              icon="search-outline-icon"
              iconPosition="right"
              type="primary"
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <JobCategoryGrid
          segments={JOBS_CATEGORY}
          currentIndex={Number(values.currentJobsIndex)}
          onPressCategory={(value) => {
            if (values.currentJobsIndex === "0") {
              onHandleSuggestionSelect(value.label)
            } else {
              handleChange('keywords', value.label);
            }
          }}
          segmentedTabs={{
            onTabChange: (value) => handleChange('currentJobsIndex', value.toString()),
            tabs: ['Jobs by Location', 'Jobs by Industry'],
            currentIndex: Number(values.currentJobsIndex)
          }}
          gridStyle={styles.gridWrapper}
        />
        <View style={{ paddingBottom: inset.bottom }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapper: {
    paddingHorizontal: 21,
  },
  logo: {
    width: 200,
    height: 76,
    resizeMode: 'contain',
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: 24,
  },
  formWrapper: {
    marginTop: 38,
    gap: 24,
  },
  rowFields: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  locationWrapper: {
    flex: 2,
  },
  distanceWrapper: {
    flex: 1.4,
  },
  buttonWrapper: {
    marginTop: 16,
    alignItems: 'flex-end',
  },
  footer: {},
  gridWrapper: {
    paddingHorizontal: 12,
  }
});

export default memo(FindJobsView);
