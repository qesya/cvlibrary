import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { memo, useEffect } from 'react';
import NormalLayout from '@/layout/normal-layout';
import { router } from 'expo-router';
import { useCVLThemeColors } from '@/hooks/useCVLThemeColors';
import Animated, { Easing, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

function Page() {
  const { blue, white, blueLite } = useCVLThemeColors();

  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.1, { duration: 500, easing: Easing.ease }),
      -1,
      true
    );

    const timeout = setTimeout(() => {
      router.replace('/find-jobs');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [scale, router]);

  return (
    <NormalLayout gradientColors={[blueLite, blue]}>
      <View style={styles.container}>
        <Animated.Image
          source={require('../assets/images/logo.png')}
          style={[styles.logo, { transform: [{ scale: scale }] }]}
        />
        <Animated.View style={{ transform: [{ scale: scale }] }}>
          <ActivityIndicator size="large" color={white} />
        </Animated.View>
      </View>
    </NormalLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: -100,
    width: 200,
    height: 76,
    resizeMode: 'contain',
    marginBottom: 40,
  },
});

export default memo(Page);
