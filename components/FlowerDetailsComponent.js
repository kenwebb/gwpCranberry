import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, Keyboard,
  FlatList, Image } from 'react-native';

let Plant = null;

// handle one photo
const Photo = ({ photo }) => (
  <View style={{padding: 10}}>
    <Text>{photo.photo_id}, {photo.trailhead}, {photo.trail}, {photo.date.$date}, {photo.imageLink}</Text>
    <Image
      source={
        photo.imageLink
      }
      style={styles.plantimage}
    />
  </View>
);

/**
 * Convert a Day-of-the-year to a month name
 * @param doy the start day, zero-indexed
 * @param start whether doy is the start of the month (true) or the end (false)
 * @param lang "en_CA" or "fr_CA"
 */
const dayOfYear2monthName = (doy, start, lang) => {
  const doysStart = [0,31,59,90,120,151,181,212,243,273,304,334];
  const doysEnd = [30,58,89,119,150,180,211,242,272,303,333,364];
  const monthsEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthsFR = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"]

  const months = lang == "en_CA" ? monthsEN : monthsFR;
  const doys = start ? doysStart : doysEnd;

  var mnth = "Unknown";
  if (doy == doys[0]) {mnth = months[0]}
  switch (doy) {
    case doys[0]: mnth = months[0]; break;
    case doys[1]: mnth = months[1]; break;
    case doys[2]: mnth = months[2]; break;
    case doys[3]: mnth = months[3]; break;
    case doys[4]: mnth = months[4]; break;
    case doys[5]: mnth = months[5]; break;
    case doys[6]: mnth = months[6]; break;
    case doys[7]: mnth = months[7]; break;
    case doys[8]: mnth = months[8]; break;
    case doys[9]: mnth = months[9]; break;
    case doys[10]: mnth = months[10]; break;
    case doys[11]: mnth = months[11]; break;
    default: break;
  }
  return mnth;
}

class FlowerDetails extends Component {

  constructor(props) {
    super(props);

    Plant = props.route.params.plant; // the entire JSON for one plant
    console.log(Plant);

    this.state = {
      plant: props.route.params.plant,
      clazz: [Plant.clazz.en_CA, Plant.clazz.fr_CA],
      family: [Plant.family.en_CA, Plant.family.fr_CA],
      sub_family: [Plant.sub_family.en_CA, Plant.sub_family.fr_CA],
      species: Plant.species,
      name: [Plant.name.en_CA, Plant.name.fr_CA],
      native: true,
      colour: Plant.colour,
      leaf: Plant.leaf,
      arrangement: Plant.arrangement,
      flowering: [
        Plant.flowering.start + " " + dayOfYear2monthName(Plant.flowering.start, true, "en_CA") + " " + dayOfYear2monthName(Plant.flowering.start, true, "fr_CA"),
        Plant.flowering.end + " " + dayOfYear2monthName(Plant.flowering.end, false, "en_CA") + " " + dayOfYear2monthName(Plant.flowering.end, false, "fr_CA")
      ],
      photos: Plant.photos,
      notes: [Plant.notes.en_CA, Plant.notes.fr_CA]
    }

    //console.log("FlowerDetails.js constructor ... " + this.state.plant.species);

  }

  // clazz
  handleClazzEN = (text) => this.handleClazz(text, 0)
  handleClazzFR = (text) => this.handleClazz(text, 1)
  handleClazz = (text, index) => {
    let arr = this.state.clazz.slice();
    arr[index] = text.trim();
    this.setState({ clazz: arr })
  }

  // family
  handleFamilyEN = (text) => this.handleFamily(text, 0)
  handleFamilyFR = (text) => this.handleFamily(text, 1)
  handleFamily = (text, index) => {
    let arr = this.state.family.slice();
    arr[index] = text.trim();
    this.setState({ family: arr })
  }

  // sub_family
  handleSubFamilyEN = (text) => this.handleSubFamily(text, 0)
  handleSubFamilyFR = (text) => this.handleSubFamily(text, 1)
  handleSubFamily = (text, index) => {
    let arr = this.state.sub_family.slice();
    arr[index] = text.trim();
    this.setState({ sub_family: arr })
  }

  // species
  handleSpecies = (text) => {
    this.setState({ species: text })
  }

  // name
  handleNameEN = (text) => this.handleName(text, 0)
  handleNameFR = (text) => this.handleName(text, 1)
  handleName = (text, index) => {
    let arr = this.state.name.slice();
    arr[index] = text;
    this.setState({ name: arr })
  }

  // native
  toggleNative = (value) => {
    this.setState({ native: value })
  }

  // colour
  handleColour = (text) => {
    this.setState({ colour: text })
  }

  // leaf
  handleLeaf = (text) => {
    this.setState({ leaf: text })
  }

  // arrangement
  handleArrangement = (text) => {
    this.setState({ arrangement: text })
  }

  // flowering
  handleFloweringStart = (text) => this.handleFlowering(text, 0)
  handleFloweringEnd = (text) => this.handleFlowering(text, 1)
  handleFlowering = (text, index) => {
    let arr = this.state.flowering.slice();
    arr[index] = text;
    this.setState({ flowering: arr })
  }

  // photos

  // notes
  handleNotesEN = (text) => this.handleNotes(text, 0)
  handleNotesFR = (text) => this.handleNotes(text, 1)
  handleNotes = (text, index) => {
    let arr = this.state.notes.slice();
    arr[index] = text;
    this.setState({ notes: arr })
  }

  submit = (clazz, family, sub_family, species, name, native, colour, leaf,
    arrangement, flowering, photos, notes) => {
     alert('{\n'
     + '  class: ' + clazz
     + ',\n  family: ' + family
     + ',\n  sub_family: ' + sub_family
     + ',\n  species: ' + species
     + ',\n  name: ' + name
     + ',\n  native: ' + native
     + ',\n  colour: ' + colour
     + ',\n  leaf: ' + leaf
     + ',\n  arrangement: ' + arrangement
     + ',\n  flowering: ' + flowering
     + ',\n  photos: ' + photos
     + ',\n  notes: ' + notes + '\n}')
  }

  createTextInput = (handleFunc, stateAttr, stateIndex, numLines) => {
    return (
      <TextInput
        style={styles.textinput2}
        multiline={numLines ? true : false}
        textAlignVertical={'top'}
        numberOfLines={numLines ? numLines : 1}
        autoCorrect={false}
        underlineColorAndroid={'transparent'}
        onChangeText = {handleFunc}
        value = {stateIndex == (-1) ? this.state[stateAttr] : this.state[stateAttr][stateIndex]}
      />
    )
  }

  renderPhotos = ({ item, index }) => {
    return (
      <View>
        <Photo photo = {item} />
      </View>
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.topbuttons}>
          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => {
                  this.submit(this.state.clazz, this.state.family, this.state.sub_family,
                    this.state.species, this.state.name, this.state.native,
                    this.state.colour, this.state.leaf, this.state.arrangement,
                    this.state.flowering, this.state.photos, this.state.notes);
                  Keyboard.dismiss();
                }
             }
             onSubmitEditing={Keyboard.dismiss}
             >
             <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>

        </View>
        <Text style={styles.textOnePlant}>One Plant ({this.state.plant.name.en_CA})</Text>

        {/* clazz class */}
        <View style={styles.textinput3}>
          <Text>class</Text>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>en_CA</Text>
            {this.createTextInput(this.handleClazzEN, "clazz", 0)}
          </View>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>fr_CA</Text>
            {this.createTextInput(this.handleClazzFR, "clazz", 1)}
          </View>
        </View>

        {/* family */}
        <View style={styles.textinput3}>
          <Text>family</Text>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>en_CA</Text>
            {this.createTextInput(this.handleFamilyEN, "family", 0)}
          </View>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>fr_CA</Text>
            {this.createTextInput(this.handleFamilyFR, "family", 1)}
          </View>
        </View>

        {/* sub_family */}
        <View style={styles.textinput3}>
          <Text>sub_family</Text>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>en_CA</Text>
            {this.createTextInput(this.handleSubFamilyEN, "sub_family", 0)}
          </View>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>fr_CA</Text>
            {this.createTextInput(this.handleSubFamilyFR, "sub_family", 1)}
          </View>
        </View>

        {/* species */}
        <View style={styles.textinput}>
          <Text style={styles.label}>species</Text>
          {this.createTextInput(this.handleSpecies, "species", -1)}
        </View>

        {/* name */}
        <View style={styles.textinput3}>
          <Text>name</Text>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>en_CA</Text>
            {this.createTextInput(this.handleNameEN, "name", 0)}
          </View>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>fr_CA</Text>
            {this.createTextInput(this.handleNameFR, "name", 1)}
          </View>
        </View>

        {/* native */}
        <View style={styles.textinput}>
          <Text style={styles.label}>native</Text>
          <Switch
           onValueChange = {this.toggleNative}
           value = {this.state.native}
          />
        </View>

        {/* colour */}
        <View style={styles.textinput}>
          <Text style={styles.label}>colour</Text>
          {this.createTextInput(this.handleColour, "colour", -1)}
        </View>

        {/*"leaf": "simple",*/}
        <View style={styles.textinput}>
          <Text style={styles.label}>leaf</Text>
          {this.createTextInput(this.handleLeaf, "leaf", -1)}
        </View>

        {/*"arrangement": "alternate",*/}
        <View style={styles.textinput}>
          <Text style={styles.label}>arrangement</Text>
          {this.createTextInput(this.handleArrangement, "arrangement", -1)}
        </View>

        {/* flowering */}
        <View style={styles.textinput3}>
          <Text>flowering</Text>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>start</Text>
            {this.createTextInput(this.handleFloweringStart, "flowering", 0)}
          </View>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>end</Text>
            {this.createTextInput(this.handleFloweringEnd, "flowering", 1)}
          </View>
        </View>

        {/* photos */}
        <View style={styles.imageinput}>
          <Text style={styles.label}>photos</Text>

          <FlatList
            data={Plant.photos}
            renderItem={this.renderPhotos}
            keyExtractor={item => item.photo_id}
            numColumns={2}
          />
        </View>

        {/* notes */}
        <View style={styles.textinput3}>
          <Text>notes</Text>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>en_CA</Text>
            {this.createTextInput(this.handleNotesEN, "notes", 0, 1)}
          </View>
          <View style={styles.textinputEnFr}>
            <Text style={styles.label}>fr_CA</Text>
            {this.createTextInput(this.handleNotesFR, "notes", 1, 1)}
          </View>
        </View>

        {/* Submit */}
      </View>
    );
  }
}

export default FlowerDetails

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: '#fff'
  },
  textinput: {
    marginLeft: 8,
    marginTop: 5,
    borderColor: '#7a42f4',
    borderWidth: 0,
    flex: 1,
    flexDirection: 'row'
  },
  textinput2: {
    backgroundColor: '#e1f0c1'
  },
  textinput3: {
    margin: 8,
    borderColor: '#7a42f4',
    borderWidth: 0
  },

  submitButton: {
    backgroundColor: '#3A5F0B',
    padding: 5,
    margin: 5
  },
  submitButtonText:{
    color: 'white'
  },

  label: {
    fontWeight: 'bold',
    paddingRight: 20
  },
  plantimage: {
    width: 200,
    height: 200
  },
  imageinput: {margin: 8},

  textinputEnFr: {
    marginLeft: 8,
    marginTop: 5,
    borderColor: '#7a42f4',
    borderWidth: 0,
    flex: 1,
    flexDirection: 'row'
  },
  topbuttons: {
    marginBottom: 8,
    flex: 1,
    flexDirection: 'row'
  },
  textOnePlant: {
    marginTop: 15,
    paddingLeft: 5,
    fontWeight: 'bold'
  }

});
