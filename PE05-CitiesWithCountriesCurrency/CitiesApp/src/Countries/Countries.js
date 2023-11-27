import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Countries extends React.Component {
  static navigationOptions = {
    title: 'Countries',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    }
  }
  
  // Assuming you have a "Country" screen to navigate to which would show more details about the country
  navigate = (item) => {
    this.props.navigation.navigate('Country', { country: item });
  }
  
  render() {
    const { screenProps: { countries } } = this.props; // Assuming your countries are passed as screenProps, adjust if needed
    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {!countries.length && <CenterMessage message='No saved countries!' />}
          {countries.map((item, index) => (
            <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index}>
              <View style={styles.countryContainer}>
                <Text style={styles.countryName}>{item.name}</Text>
                <Text style={styles.currency}>{item.currency}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  countryName: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)'
  },
});
