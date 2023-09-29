import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Modal, Button } from 'react-native-paper';
import axios from 'axios';
import CharacterInput from './app/components/CharacterInput';
import CharacterImage from './app/components/CharacterImage';
import ErrorText from './app/components/ErrorText';

const App = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterImage, setCharacterImage] = useState(null);
  const [error, setError] = useState('');

  const fetchCharacterImage = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${characterName}`
      );

      if (response.data.results.length > 0) {
        const character = response.data.results[0];
        setCharacterImage(character.image);
        setError('');
      } else {
        setCharacterImage(null);
        setError('Character not found.');
      }
    } catch (error) {
      setError('Character not found.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick and Morty Character Viewer</Text>
      <CharacterInput
        characterName={characterName}
        setCharacterName={setCharacterName}
        setCharacterImage={setCharacterImage}
        setError={setError}
      />
      <ErrorText error={error} />
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={fetchCharacterImage} style={{ width: 200 }}>
          Show image
        </Button>
      </View>
      {characterImage && (
        <CharacterImage characterImage={characterImage} characterName={characterName} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20, // Agrega un espacio entre el ErrorText y el botón
  },
});

export default App;
