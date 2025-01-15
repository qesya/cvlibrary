
# CVL FED Interview task

This project is the result of the CVL FED interview task, which involves building a mobile app screen with specific functionality. The app aligns with the provided mobile mock-up and demonstrates proficiency in React Native and TypeScript. Key features of the app include location-based autocomplete and implementation of performance-enhancing features like debouncing and error handling.

### Stack:
- **Expo**
- **Expo Router**
- **Storybook**
- **Typescript**
- **React Query** (for handling API requests and caching)
- **react-native-reanimated**
- **expo-linear-gradient**
- **JEST & @testing-library/react-native**

### Core Features & Requirements & Features Implemented:

The app has been built with a focus on clean code, performance, and maintainability. Below is a breakdown of the features implemented, as well as the key considerations that ensure a smooth and efficient experience for the end-user.

- Atomic Design Pattern
- Separation of View and Logic
- Reusable & Customizable Components: All components are efficient, easy to use, and fully customizable.
- Storybook for Component Development & Documentation
- Alignment with Mobile Designs ( Adobe XD ) ,The app has been designed to align with the provided mobile mockups, ensuring a consistent user experience. Attention has been paid to padding, margins, font sizes, and other design elements to match the mockup as closely as possible.
- Using React Native Expo & TypeScript
- Performance and Stability Enhancements, To improve the app’s performance, I have implemented debouncing for the location input field. This prevents the app from sending requests to the API too frequently when the user types, reducing unnecessary network load. the debouncing is handled using `lodash/debounce`. **Importing only the debounce function (import debounce from 'lodash/debounce') ensures minimal bundle size**. *Why this is important*: **lodash is written using CommonJS, which doesn't support tree-shaking effectively. Importing the entire lodash library could add around 24KB to the bundle size. By importing only the specific method we need, the size is reduced to around 1KB, making the app more lightweight and efficient**.
- Unit Testing with React Native Testing Library
- Location Autocomplete, The app includes a location field that triggers autocomplete functionality using the provided locations API. The app will only send a request to the API if the user has typed at least 2 characters in the location field, ensuring that unnecessary requests are avoided.
- Tab Navigation for Jobs Categories, The bottom section of the screen contains tabs that allow the user to toggle between 'Jobs by Location' and 'Jobs by Industry'.
- API Request Optimization, The API results are cached for 5 minutes, reducing the number of requests sent and improving app performance.
- Cross-Platform Compatibility
- The project is built to successfully build and run on both iOS and Android.


### How to Run:

#### 1. Install Dependencies:
Make sure you have **Node.js** installed. Then run the following commands:

```bash
npm install
```

#### 2. Create `.env` File:
Create a `.env` file in the root directory and add the following environment variable:

```
EXPO_PUBLIC_STORYBOOK_MODE="false"
EXPO_PUBLIC_BASE_URL="https://api.cv-library.co.uk/v1/locations"
```

**Switch to Storybook Mode:**
To switch to Storybook Mode, change the `EXPO_PUBLIC_STORYBOOK_MODE` value to `true` in the .env file:

#### 3. Run on iOS / Android :
For iOS, run:

```bash
npm run ios
```

For Android, run:

```bash
npm run android
```

#### Run the test:

```bash
npm run test
```

### Created by: Pasquale Palena
