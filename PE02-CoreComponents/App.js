import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Linking
} from 'react-native';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');
  const [isCourseEntered, setIsCourseEntered] = useState(false);

  const handleURL = () => {
    Linking.openURL('https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/');
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('./assets/icon.png')}
        style={styles.image}
      />
      <Text style={styles.header}>Core Requirements (24 Credits)</Text>
      {[
        "CS 504 Software Engineering",
        "CS 506 Programming for Computing",
        "CS 519 Cloud Computing Overview",
        "CS 533 Computer Architecture",
        "CS 547 Secure Systems and Programs",
        "CS 622 Discrete Math and Algorithms for Computing",
        "DS 510 Artificial Intelligence for Data Science",
        "DS 620 Machine Learning & Deep Learning"
      ].map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

      <Text style={styles.header}>Depth of Study (6 Credits)</Text>
      {[
        "CS 624 Full-Stack Development I",
        "CS 628 Full-Stack Development II"
      ].map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

      <Text style={styles.header}>Capstone (3 Credits)</Text>
      <Text style={styles.course}>CS 687 Computer Science Capstone</Text>

      <Text style={styles.question}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your favorite course"
        value={favoriteCourse}
        onChangeText={(text) => {
          setFavoriteCourse(text);
          setIsCourseEntered(text.trim() !== '');  // Set whether text has been entered
        }}
      />
      {isCourseEntered && <Text style={styles.response}>That is a great course!</Text>}

      <Text 
        style={styles.link} 
        onPress={handleURL}>
          Access the CityU’s catalog here.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  header: {
    fontSize: 16,
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    marginTop: 10,
  },
  course: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
  },
  question: {
    fontSize: 16,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 8,
  },
  response: {
    marginTop: 10,
    color: 'green',
  },
  link: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  }
});

export default CoreComponents;