import { useForm } from '@/hooks/useForm';
import FindJobsView from './find-jobs-view';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { useGetLocationQueryAPI } from '@/services/queries/useGetLocationQueryAPI';
import { extractLabels } from '@/utils/string-utils';
import debounce from 'lodash/debounce';

export interface FormState {
  keywords: string;
  location: string;
  distance: string;
  currentJobsIndex: string;
  showSuggestion: boolean;
}

export default function Page() {
  // STATE
  const { values, errors, handleChange, validate } = useForm<FormState>(
    {
      keywords: '',
      location: '',
      distance: '',
      currentJobsIndex: '0',
      showSuggestion: false,
    },
    {
      keywords: value =>
        typeof value === 'string' && value.trim().length > 0
          ? null
          : 'Keywords cannot be empty',

      location: value =>
        typeof value === 'string' && value.trim().length >= 3
          ? null
          : 'Location must be at least 3 characters',

      distance: value =>
        typeof value === 'string' && value.trim().length > 0
          ? null
          : 'Distance cannot be empty',
    }
  );
  const [location, setLocation] = useState<string>(values.location);
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(true);

  // API
  const { isLoading, data } = useGetLocationQueryAPI(values.location);

  const suggestionData = useMemo(() => {
    return extractLabels(data ?? []);
  }, [data]);

  const debouncedLocationChange = useMemo(
    () =>
      debounce((text: string) => {
        setShowAutoComplete(true)
        handleChange('location', text);
      }, 500),
    [handleChange, setShowAutoComplete]
  );

  const onHandleDebouncedLocationChange = (text: string) => {
    setLocation(text);
    debouncedLocationChange(text);
  };

  const onHandleFindJobsNow = useCallback(() => {
    const payload = {
      jobTilte: values.keywords,
      location: location,
      distance: values.distance
    }
    Alert.alert('Result', JSON.stringify(payload));
  }, [values, location]);

  const onHandleSelectSuggestion = useCallback((location: string) => {
    setLocation(location)
    setShowAutoComplete(false);
  }, [setShowAutoComplete, setLocation])

  return (
    <FindJobsView
      values={values}
      suggestion={{
        isLoading: isLoading,
        showSuggestion: showAutoComplete,
        suggestionList: suggestionData,
      }}
      handleChange={handleChange}
      onPressFindJobsNow={onHandleFindJobsNow}
      debouncedLocationValue={location}
      handleDebouncedLocationChange={onHandleDebouncedLocationChange}
      onHandleSuggestionSelect={onHandleSelectSuggestion}
    />
  );
}
