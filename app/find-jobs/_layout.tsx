import { Slot } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';
import NormalLayout from '@/layout/normal-layout';
import { useCVLThemeColors } from '@/hooks/useCVLThemeColors';

export default function FindJobsLayout() {
    const { blue, blueLite, } = useCVLThemeColors()

    return (
        <NormalLayout
            gradientColors={[blueLite, blue]}
        >
            <Slot />
        </NormalLayout>
    );
}
