import { View, Text, TextInput, StyleSheet,Button } from "react-native";
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';

export default function LabelScreen({ route, navigation }) {
    const { uri } = route.params
    const [data,setData] = useState({className:"",productName:"",MeasuringUnit:""})
    const savePicture = async () => {
        const status = await MediaLibrary.requestPermissionsAsync()
        if (status.granted) {
            const assert = await MediaLibrary.createAssetAsync(imageUri)
            const result = await MediaLibrary.createAlbumAsync('Grocery', assert, true)
            setImageUri(null)
            console.log("image ", result)
        }
    }
    const handleOnChange = (name,value)=>{
        setData({...data,[name]:value})
    }

    const handleSubmit = ()=>{
        console.log(data)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={"Enter class name"}
                onChangeText={(e)=>handleOnChange("className",e)}
            />
            <TextInput
                style={styles.input}
                placeholder={"Enter Product Name"}
                onChangeText={(e)=>handleOnChange("productName",e)}
            />
            <TextInput
                style={styles.input}
                placeholder={"Enter Measuring Unit"}
                onChangeText={(e)=>handleOnChange("MeasuringUnit",e)}
            />
            <Button
                title="Save"
                onPress={handleSubmit}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});