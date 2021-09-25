import React from 'react';
import { StyleSheet, Text, View,Button,Alert} from 'react-native';

export default function firstScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Instruction</Text>
            <Text style={styles.titleText}>Step 1:</Text><Text>Take a photo</Text>
            <Text style={styles.titleText}>Step 2:</Text><Text>Label the image</Text>
            <Text style={styles.titleText}>Step 3:</Text><Text>Save</Text>
            <Button
                title="Get Started"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    )
}