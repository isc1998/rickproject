import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CharacterImage = ({ characterImage, characterName }) => {
  return (
    <View style={styles.container}>
      {characterImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: characterImage }} style={styles.image} />
          <Text style={styles.characterName}>{characterName}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  
  imageContainer: {
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 15,
    marginBottom: 10,
  },
  characterName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CharacterImage;
