import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { getPlants } from '../db/gwp/plants'
import FlowerDetails from './FlowerDetailsComponent'

export default class Flowers extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    //console.log(props);
  }

  plants = getPlants(this.props.route.params.filters);

  handlePlantPress = (item) => {
    this.props.navigation.navigate('FlowerDetails', {
      plant: item
    });
  };

  renderPlant = ({ item, index }) => {
    return (
      <View style={styles.viewplant}>
        <TouchableOpacity
        onPress={() => this.handlePlantPress(item)}
        >
          <Image
            source={
              item.photos[0].imageLink
            }
            style={styles.plantimage}
          />
          <Text style={styles.imagetext}>{item.species}</Text>
        </TouchableOpacity>
      </View>
    )
  };

  renderFilter = ({ item }) => {
    //console.log(item);
    return (
      <Text style={styles.searchcriteria}>{item[Object.getOwnPropertyNames(item)[0]].split(",")[1]}</Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.route.params.filters}
          renderItem={this.renderFilter}
          keyExtractor={item => item}
          numColumns={10}
        />
        <FlatList
          data={this.plants}
          renderItem={this.renderPlant}
          keyExtractor={item => item.species}
          numColumns={1}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plantimage: {
    width: 400,
    height: 300
  },
  gwptitle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  searchcriteria: {
    backgroundColor: '#d1f4a4',
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: 'normal',
    fontSize: 18,
    padding: 10
  },
  viewplant: {
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderColor: '#d1f4a4',
    padding: 8,
    flex: 1,
    flexDirection: "column"
  },
  imagetext: {
    marginTop: 5,
    color: '#3A5F0B',
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontSize: 24
  }
});
