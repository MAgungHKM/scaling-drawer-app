import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MainStyles} from '../styles';

export default function HomeScreen() {
  return (
    <View style={[MainStyles.container, {backgroundColor: 'cornsilk'}]}>
      <Text style={MainStyles.title}>This is Home!</Text>
    </View>
  );
}
