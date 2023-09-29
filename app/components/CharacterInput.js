import React from 'react';
import { View } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';

const CharacterInput = ({ characterName, setCharacterName, setCharacterImage, setError }) => {
  const handleChangeText = (text) => {
    setCharacterName(text);
    setCharacterImage(null);
    setError('');
  };

  return (
    <View>
      <PaperTextInput
        label="Name of character"
        value={characterName}
        onChangeText={handleChangeText}
        style={{ width: 300, marginBottom: 20 }}
      />
    </View>
  );
};

export default CharacterInput;
