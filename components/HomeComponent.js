import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {Picker} from '@react-native-community/picker';
//import AsyncStorage from '@react-native-async-storage/async-storage';

// expo Localization
import i18n from 'i18n-js';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonColor: "#3A5F0B",
      languageSelected: 'en'
    }
  }

  onChangeLanguage(languageSelected) {
    this.setState({
      languageSelected
    })
    i18n.locale = languageSelected

  }

  render() {

    // https://en.wikipedia.org/wiki/Regional_indicator_symbol
    /*const lang = () => [
      {key:'en',label:'🇬🇧'},
      {key:'fr',label:'🇫🇷'},
      {key:'es',label:'🇪🇸'},
      {key:'de',label:'🇩🇪'},
      {key:'la',label:'🇻🇦'},
      {key:'ru',label:'🇷🇺'}
    ]*/
    const lang = () => [
      {key:'en',label:'EN'},
      {key:'fr',label:'FR'},
      {key:'es',label:'ES'},
      {key:'de',label:'DE'},
      {key:'la',label:'LA'},
      {key:'ru',label:'РУ'}
    ]

    const {languageSelected} = this.state

    return (
      <View style={styles.container}>
        <DropdownLanguage
          language={languageSelected}
          onChangeLanguage={this.onChangeLanguage.bind(this)}
          listLanguage={lang()}
        >
        </DropdownLanguage>
        <Text>{i18n.t('gwp')}</Text>
        <Text>
          {i18n.t('welcome')} {i18n.t('all')}
        </Text>
        {/*<Text style={styles.langtext}>{`${lang()[0].label} ${lang()[1].label} ${lang()[2].label} ${lang()[3].label} ${lang()[4].label} ${lang()[5].label}`}</Text>*/}
        <Text> </Text>
        <Button
          style={styles.button}
          color={this.state.buttonColor}
          title={i18n.t('homebutton.0')}
          onPress={() => this.props.navigation.navigate('Query')}
        />
        <Text> </Text>
        <Button
          style={styles.button}
          color={this.state.buttonColor}
          title={i18n.t('homebutton.1')}
          onPress={() => this.props.navigation.navigate('About')}
        />
        <Text> </Text>
        <Button
          style={styles.button}
          color={this.state.buttonColor}
          title={i18n.t('homebutton.2')}
          onPress={() => this.props.navigation.navigate('Contact')}
        />
        <Text> </Text>
        <Button
          style={styles.button}
          color={this.state.buttonColor}
          title={i18n.t('homebutton.3')}
          onPress={() => this.props.navigation.navigate('Links')}
        />
        <Text> </Text>
        <Button
          style={styles.button}
          color={this.state.buttonColor}
          title={i18n.t('homebutton.4')}
          onPress={() => this.props.navigation.navigate('Copyright')}
        />
      </View>
    );
  }
}

class DropdownLanguage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.dropdownLanguage}>
        <Picker
          mode="dropdown"
          iosHeader={''}
          style={styles.dropdownLanguagePicker}
          selectedValue={this.props.language}
          onValueChange={this.props.onChangeLanguage.bind(this)}
        >
          {this.props.listLanguage.map((item, i) => {
            return <Picker.Item key={i} value={item.key} label={item.label} />
          })}
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1f4a4',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25
  },
  button: {
    padding: 20,
    textTransform: 'none'
  },
  langtext: {
    fontSize: 30
  },
  dropdownLanguage: {
    width:110,
    height:50,
    position:'absolute',
    top:10,
    right:10,
    flexDirection:'row',
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  dropdownLanguagePicker: {
    width:100,
    height:40
  }
});
