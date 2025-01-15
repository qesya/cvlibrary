import React from 'react';
import { Stack, useNavigation } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

type NormalLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
  title?: string;
  lightColor?: string;
  darkColor?: string;
  gradientColors?: [string, string, ...string[]];
};

export default function NormalLayout({
  children,
  title,
  darkColor,
  lightColor,
  gradientColors,
  ...props
}: NormalLayoutProps) {
  const inset = useSafeAreaInsets();
  const { goBack } = useNavigation();

  const paddingTop = inset.top;

  const background = gradientColors ? (
    <LinearGradient
      colors={gradientColors}
      style={styles.linearGradient}
    >
      <View style={[styles.safeArea,{ paddingTop }]}>
        {children}
      </View>
    </LinearGradient>
  ) : (
    <View style={[styles.safeArea]}>
      <View style={{ paddingTop }}>
        {children}
      </View>
    </View>
  );


  return (
    <View style={[styles.safeArea]}>
      <Stack.Screen
        options={{
          title: title ?? '',
          headerTitleStyle: {
            fontFamily: 'Opensans-Regular',
            fontSize: 16,
          },
          headerTitleAlign: 'center',
          headerBackVisible: false,
        }}
      />
      {background}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
