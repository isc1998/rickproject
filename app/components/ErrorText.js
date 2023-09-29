import React from 'react';
import { View, Text } from 'react-native';

const ErrorText = ({ error }) => {
  return (
    <View>
      {error !== '' && (
        <Text style={{ color: 'red', marginBottom: 10, fontWeight: 'bold', fontSize: 12, textAlign: 'center' }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default ErrorText;
