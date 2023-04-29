import React from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet, Image } from 'react-native';

const CoreComponent = props => {
  const hello = 'Hello World';
  return (
    <ScrollView>
      <View>
        <View style={styles.greenBox} />
        <Text style={{ color: 'red' }}>{hello}</Text>
        <TextInput
          placeholder="masukan nama anda"
          style={styles.textInput}
        />
        <Image
          source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/5fdbd4211512bcc7bbaddfb4/Dota-2-hero-Hoodwink-/960x0.jpg?format=jpg&width=960' }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default CoreComponent;