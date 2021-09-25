import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to First"
          onPress={() => navigation.navigate('firstScreen')}
        />
      </View>
    );
  }