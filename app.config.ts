import type { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: "cvlibrary",
    slug: "cvlibrary",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "cvlibrary",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
        supportsTablet: true
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/images/adaptive-icon.png",
            backgroundColor: "#ffffff",
        },
        softwareKeyboardLayoutMode: "pan",
    },
    web: {
        bundler: "metro",
        output: "static",
        favicon: "./assets/images/favicon.png"
    },
    plugins: [
        "expo-router",
        [
            "expo-splash-screen",
            {
                "image": "./assets/images/splash-icon.png",
                "imageWidth": 200,
                "resizeMode": "contain",
                "backgroundColor": "#ffffff"
            }
        ],
        [
            "expo-font",
            {
                fonts: [
                    './assets/fonts/OpenSans-Regular.ttf',
                    './assets/fonts/OpenSans-SemiBold.ttf',
                    './assets/fonts/OpenSans-Light.ttf',
                    './assets/fonts/OpenSans-Bold.ttf',
                  ], 
            }

        ]
    ],
    experiments: {
        typedRoutes: true
    }
});
