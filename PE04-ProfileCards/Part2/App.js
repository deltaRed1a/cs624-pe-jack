import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Image, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const userImage = require('./user.png');

// Initialize data for 6 profile cards
const initialData = Array.from({ length: 6 }).fill({
  image: userImage,
  name: 'John Doe',
  occupation: 'React Native Developer',
  description: 'John is a really great Javascript developer. ' +
    'He loves using JS to build React Native applications ' +
    'for iOS and Android',
  showThumbnail: true
});

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View>
          <Text style={styles.cardName}>
            {name}
          </Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialData
    };
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, { [index]: { showThumbnail: { $set: showThumbnail } } })
    });
  };

  render() {
    const list = this.state.data.map((item, index) => {
      return (
        <ProfileCard key={'card-' + index}
          image={item.image}
          name={item.name}
          occupation={item.occupation}
          description={item.description}
          onPress={() => this.handleProfileCardPress(index)}
          showThumbnail={item.showThumbnail} />
      );
    });

    return (
      <View style={styles.container}>
        {list}
      </View>
    );
  }
}

// Styles
const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Set flexDirection to row to align cards side by side
    flexWrap: 'wrap', // Allow wrapping for multiple rows
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    margin: 10, // Add margin for spacing between cards
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 150, // Adjust width for smaller cards
    height: 200, // Adjust height for smaller cards
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    }),
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 80, // Adjust width for smaller image container
    height: 80, // Adjust height for smaller image container
    borderRadius: 40, // Make it round
    marginTop: 15,
    paddingTop: 15,
    overflow: 'hidden', // Ensure the image doesn't overflow the rounded borders
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18, // Adjust font size for smaller cards
    marginTop: 10,
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 5, // Reduce margin for smaller cards
    marginBottom: 5,
  },
  cardDescription: {
    fontStyle: 'italic',
    fontSize: 12, // Adjust font size for smaller cards
    marginTop: 5,
    marginHorizontal: 5, // Adjust horizontal margin
    marginBottom: 5
  },
  cardThumbnail: {
    width: 80, // Set fixed width for thumbnail
    height: 100, // Set fixed height for thumbnail
    transform: [{ scale: 1 }] // Set scale back to 1 to show full size
  },
});
