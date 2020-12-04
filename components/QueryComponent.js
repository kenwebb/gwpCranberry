import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {Picker} from '@react-native-community/picker';
import i18n from 'i18n-js';
import { getPlants } from '../db/gwp/plants'

export default class Query extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      colour: "*",
      leaf: "*",
      arrangement: "*",
      floweringin: `${this.getCurrentMonthName()}`,
      speciesname: "*",
      commonname: "*",
      familyname: "*",
      trail: "*",
      buttonColor: "#3A5F0B",
      resultsCount: `${getPlants().length}`
    };
  }

  // get Picker Items
  getPItems = i18nName => {
    const namesEN = i18n.t(i18nName, {locale: "en"});
    return i18n.t(i18nName).map((item, i) => <Picker.Item key ={namesEN[i]} value={`${namesEN[i]},${item}`} label={item} />)
  }

  // get localized name of the current month (ex: "June")
  /*getCurrentMonthName = () => {
    const monthArr = i18n.t("floweringin");
    const monthName = monthArr[new Date().getMonth()];
    return monthName;
  }*/
  getCurrentMonthName = () => i18n.t("floweringin")[new Date().getMonth()]

  // text must be of the form:  [{"colour":"red"}]
  // this function MUST use arrow notation
  handleFiltersInput = (text) => text ? this.setState({ filters: text }) : null

  assembleFilters = () => {
    const fltr = [];
    this.state.colour != "*" ? fltr.push({colour: this.state.colour}) : null;
    this.state.leaf != "*" ? fltr.push({leaf: this.state.leaf}) : null;
    this.state.arrangement != "*" ? fltr.push({arrangement: this.state.arrangement}) : null;
    this.state.floweringin != "*" ? fltr.push({floweringin: this.state.floweringin}) : null;
    this.state.familyname != "*" ? fltr.push({familyname: this.state.familyname}) : null;
    this.state.trail != "*" ? fltr.push({trail: this.state.trail}) : null;
    return fltr;
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.textsearch1}>{i18n.t('querytitle')}</Text>

        <View style={styles.containerTop}>
          <Text style={styles.tetxtsearch1}>{`${this.state.resultsCount} ${i18n.t('queryresults')}`}</Text>
          <Button
            style={styles.button}
            color={this.state.buttonColor}
            title={i18n.t('querydone')}
            onPress={() => {
              const fltr = this.assembleFilters();
              this.props.navigation.navigate('Flowers', {
                filters: fltr
              });
            }}
          />
        </View>

        {/* colour */}
        <View style={styles.pickerview}>
          <Text style={styles.textsearch2}>{i18n.t('queryfiltername.0')}</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.colour}
            onValueChange={(itemValue, itemIndex) => this.setState({colour: itemValue}, () =>
              this.setState({resultsCount: `${getPlants(this.assembleFilters()).length}`})
            )}
          >
            <Picker.Item label={i18n.t('all')} value="*" />
            {this.getPItems("colour")}
          </Picker>
        </View>

        {/* leaf */}
        <View style={styles.pickerview}>
          <Text style={styles.textsearch2}>{i18n.t('queryfiltername.1')}</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.leaf}
            onValueChange={(itemValue, itemIndex) => this.setState({leaf: itemValue}, () =>
              this.setState({resultsCount: `${getPlants(this.assembleFilters()).length}`})
            )}
          >
            <Picker.Item label={i18n.t('all')} value="*" />
            {this.getPItems("leaf")}
          </Picker>
        </View>

        {/* arrangement */}
        <View style={styles.pickerview}>
          <Text style={styles.textsearch2}>{i18n.t('queryfiltername.2')}</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.arrangement}
            onValueChange={(itemValue, itemIndex) => this.setState({arrangement: itemValue}, () =>
              this.setState({resultsCount: `${getPlants(this.assembleFilters()).length}`})
            )}
          >
            <Picker.Item label={i18n.t('all')} value="*" />
            {this.getPItems("arrangement")}
          </Picker>
        </View>

        {/* floweringin */}
        <View style={styles.pickerview}>
          <Text style={styles.textsearch2}>{i18n.t('queryfiltername.3')}</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.floweringin}
            onValueChange={(itemValue, itemIndex) => this.setState({floweringin: itemValue}, () =>
              this.setState({resultsCount: `${getPlants(this.assembleFilters()).length}`})
            )}
          >
            <Picker.Item label={this.getCurrentMonthName()} value={this.getCurrentMonthName()} />
            <Picker.Item label={i18n.t('all')} value="*" />
            {this.getPItems("floweringin")}
          </Picker>
        </View>

        {/* familyname */}
        <View style={styles.pickerview}>
          <Text style={styles.textsearch2}>{i18n.t('queryfiltername.4')}</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.familyname}
            onValueChange={(itemValue, itemIndex) => this.setState({familyname: itemValue}, () =>
              this.setState({resultsCount: `${getPlants(this.assembleFilters()).length}`})
            )}
          >
            <Picker.Item label={i18n.t('all')} value="*" />
            {this.getPItems("familyname")}
          </Picker>
        </View>

        {/* trail */}
        <View style={styles.pickerview}>
          <Text style={styles.textsearch2}>{i18n.t('queryfiltername.5')}</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.trail}
            onValueChange={(itemValue, itemIndex) => this.setState({trail: itemValue}, () =>
              this.setState({resultsCount: `${getPlants(this.assembleFilters()).length}`})
            )}
          >
            <Picker.Item label={i18n.t('all')} value="*" />
            {this.getPItems("trail")}
          </Picker>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  containertop: {
    backgroundColor: '#3A5F0B',
    flex: 1,
    flexDirection: "column"
  },
  picker: {
    height: 50,
    width: 200,
    margin: 5,
    padding: 0
  },
  pickerview: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textsearch1: {
    margin: 20,
    color: '#3A5F0B'
  },
  textsearch2: {
    color: '#3A5F0B',
    margin: 0,
    padding: 0
  },
  button: {

  }
});
