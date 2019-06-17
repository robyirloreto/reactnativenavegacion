import React from 'react';
import { View, Text } from 'react-native';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail title',
  };
  render() {
    return (
      <View>
        <Text>DetailScreen</Text>
      </View>
    );
  }
}