import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import i18n from 'i18n-js';

const About = (props) => {
  return (
    <View style={styles.container}>
      <Text>{i18n.t('abouttitle')}</Text>
      <Text>{i18n.t('abouttext.0')}</Text>
      <Text>{i18n.t('abouttext.1')}</Text>
      <Text>{i18n.t('abouttext.2')}</Text>
      <Text>{i18n.t('abouttext.3')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25
  },
});

export default About;
