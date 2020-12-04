import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import i18n from 'i18n-js';

const Contact = (props) => {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
      <Text>You may contact us by whispering "abracadabra" into the flower of any plant in this app, that you find while walking along the trails of Gatineau Park.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25
  },
});

export default Contact;
