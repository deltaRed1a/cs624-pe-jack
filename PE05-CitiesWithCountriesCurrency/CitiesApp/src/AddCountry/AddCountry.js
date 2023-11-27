// AddCountry.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuidV4 from 'uuid/v4'; // Ensure you have uuid package installed
import { colors } from '../theme'; // Adjust the path according to your project structure

class AddCountry extends React.Component {
  state = {
    country: '',
    currency: ''
  };
  
  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };
  
  submit = () => {
    if (this.state.country === '' || this.state.currency === '') alert('Please complete form');
    const country = {
      country: this.state.country,
      currency: this.state.currency,
      id: uuidV4(),
      // Add additional properties if necessary
    };
    
    // Assuming you have a method to add a country in your parent component
    this.props.route.params.addCountry(country);
    
    this.setState({
      country: '',
      currency: ''
    }, () => {
      this.props.navigation.navigate('Countries'); // Make sure 'Countries' is the correct route name
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Add Country</Text>
        
        <TextInput
          placeholder='Country name'
          onChangeText={val => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />
        
        <TextInput
          placeholder='Currency'
          onChangeText={val => this.onChangeText('currency', val)}
          style={styles.input}
          value={this.state.currency}
        />
        
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
  }
})


export default AddCountry;
