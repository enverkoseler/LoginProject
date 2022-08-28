import React from 'react';
import {
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Navigaton from './src/navigation/index';
import configureStore from './utils/configureStore';
const App = () => {
  const store = configureStore();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView style={{ backgroundColor: '#283f4f', flex: 1 }} forceInset={{ top: 'never' }}>
          <Navigaton />
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
