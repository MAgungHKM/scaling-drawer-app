import React from 'react';
import {Text, View} from 'react-native';
import {MainStyles} from '../styles';

export default function MessagesScreen() {
  return (
    <View style={[MainStyles.container, {backgroundColor: 'paleturquoise'}]}>
      <Text style={MainStyles.title}>This is Messages!</Text>
    </View>
  );
}
