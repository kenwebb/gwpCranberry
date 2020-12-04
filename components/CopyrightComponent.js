import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
//import LocalizationContext from '../App.js'; // causes cycle error on Android

// NOTE: this is intentionally a function component, that uses the useState hook
const Copyright = (props) => {
  console.log(props);
  //console.log(LocalizationContext);
  //const { t, locale, setLocale } = useContext(LocalizationContext);

  // TESTING: create "dummy" as a state variable, with an initial value of 'COPYRIGHT'
  const [dummy, setDummy] = useState('COPYRIGHT');

  return (
    <View style={styles.container}>
      <Text>{dummy}</Text>
      <Text>Who owns what.</Text>
      <Text>{props.route.name}</Text>
      {/*<Text>{t('welcome')}</Text>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25
  },
});

export default Copyright;
