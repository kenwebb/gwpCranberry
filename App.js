import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeComponent'
import QueryScreen from './components/QueryComponent'
import FlowersScreen from './components/FlowersComponent'
import FlowerDetailsScreen from './components/FlowerDetailsComponent'

import AboutScreen from './components/AboutComponent'
import ContactScreen from './components/ContactComponent'
import LinksScreen from './components/LinksComponent'
import CopyrightScreen from './components/CopyrightComponent'

const Stack = createStackNavigator();

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { getLocalizedStrings } from './db/gwp/localizedStrings'
//import AsyncStorage from '@react-native-async-storage/async-storage';

// see: https://reactnavigation.org/docs/hello-react-navigation
// "Sometimes we might want to pass additional props to a screen."

const LocalizationContext = React.createContext();

const App = (props) => {
  // https://docs.expo.io/versions/v39.0.0/sdk/localization/

  // Set the key-value pairs for the different languages you want to support.
  i18n.translations = getLocalizedStrings("All");

  const [locale, setLocale] = React.useState(Localization.locale);
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );

  // Set the locale once at the beginning of your app.
  i18n.locale = locale;

  //i18n.locale = "fr";
  // When a value is missing from a language it'll fallback to another language with the key present.
  // see also: https://reactnavigation.org/docs/localization
  i18n.fallbacks = true;
  i18n.defaultLocale = "en";

  // TODO the screen names do NOT update when a user changes the language
  return (
    <LocalizationContext.Provider value={localizationContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: i18n.t('screen.0') }} />
          <Stack.Screen name="Query" component={QueryScreen} options={{ title: i18n.t('screen.1') }} />
          <Stack.Screen name="Flowers" component={FlowersScreen} options={{ title: i18n.t('screen.2') }} />
          <Stack.Screen name="FlowerDetails" component={FlowerDetailsScreen} options={{ title: i18n.t('screen.3') }} />
          <Stack.Screen name="About" component={AboutScreen} options={{ title: i18n.t('screen.4') }} />
          <Stack.Screen name="Contact" component={ContactScreen} options={{ title: i18n.t('screen.5') }} />
          <Stack.Screen name="Links" component={LinksScreen} options={{ title: i18n.t('screen.6') }} />
          <Stack.Screen name="Copyright" component={CopyrightScreen} options={{ title: i18n.t('screen.7') }} />
        </Stack.Navigator>
      </NavigationContainer>
    </LocalizationContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//export {LocalizationContext, App};
export default App;
