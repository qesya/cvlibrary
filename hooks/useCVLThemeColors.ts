import { useMemo } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export function useCVLThemeColors(overrideTheme?: 'light' | 'dark') {
  const systemTheme = useColorScheme() ?? 'light';
  const theme = overrideTheme ?? systemTheme;

  return useMemo(() => Colors[theme], [theme]);
}
