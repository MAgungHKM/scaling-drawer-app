import React from 'react';
import {Text, View} from 'react-native';
import {MainStyles} from '../styles';

export default function ContactScreen() {
  return (
    <View style={[MainStyles.container, {backgroundColor: 'lavenderblush'}]}>
      <Text style={MainStyles.title}>This is Contact!</Text>
    </View>
  );
}
