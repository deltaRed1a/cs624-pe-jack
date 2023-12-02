import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

class Country extends React.Component {
  static navigationOptions = (props) => {
    const { country } = props.route.params;
    return {
      title: country.name,
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
      }
    }
  }

  render() {
    const { country } = this.props.route.params;
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.name}>{country.name}</Text>
          <CenterMessage message={`Currency: ${country.currency}`} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default Country;
