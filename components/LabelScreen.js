import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { SECRET } from "../config";


export default function LabelScreen({ route, navigation }) {
    const { uri } = route.params
    const [data, setData] = useState({ className: "", productName: "", MeasuringUnit: "" })
    const measuringUnit = [{
        value: 'kg/g',
    }, {
        value: 'l/ml',
    }, {
        value: 'pcs',
    }];

    
    const handleOnChange = (name, value) => {
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async () => {
        let apiUrl = `https://api.cloudinary.com/v1_1/${SECRET}/image/upload`
        let base64Img = `data:image/jpg;base64,${uri}`
        let imageData = { file: base64Img, upload_preset: "annotationImage" }
        //console.log("image data", imageData)
        try{
            let result = await fetch(apiUrl,{
                method:"POST",
                body:JSON.stringify(imageData),
                headers:{'content-type': 'application/json'}
            })
            //console.log("result",result)
            let response = await result.json()
            console.log(response)
        }catch(err){
            console.log("error",err)
        }


        // save image using cloudlinarly api
        // check image saved successfully
        //save data with image public id using mongodb realm webhook
        //false show error

    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={"Enter class name"}
                onChangeText={(e) => handleOnChange("className", e)}
            />
            <TextInput
                style={styles.input}
                placeholder={"Enter product Name"}
                onChangeText={(e) => handleOnChange("productName", e)}
            />
            <Dropdown
                icon='chevron-down'
                iconColor='#E1E1E1'
                label='Measuring Unit'
                onChangeText={e => handleOnChange("MeasuringUnit", e)}
                data={measuringUnit}
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