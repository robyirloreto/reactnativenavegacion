import React from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home title',
  };
  render() {
    return (
      <View>
        <Text>HomeScreen en pantallas</Text>
        <Button
          title="Ir a DetailScreen"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
      </View>
    );
  }
}