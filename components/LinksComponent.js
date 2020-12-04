import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import i18n from 'i18n-js';

const Links = (props) => {
  return (
    <View style={styles.container}>
      <Text>{i18n.t('homebutton.3')}</Text>
      <Text>Links to other sources of information about wildflowers in Gatineau Park.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'indigo',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25
  },
});

export default Links;
