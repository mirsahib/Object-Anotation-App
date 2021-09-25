import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function firstScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Instruction</Text>
            <Text style={styles.titleText}>Step 1:</Text><Text>Take a photo</Text>
            <Text style={styles.titleText}>Step 2:</Text><Text>Label the image</Text>
            <Text style={styles.titleText}>Step 3:</Text><Text>Save</Text>
            <Button
                title="Go to Second"
                onPress={() => navigation.navigate('secondScreen')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});