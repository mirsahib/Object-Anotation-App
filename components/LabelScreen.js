import { View, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from 'react';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import {uploadImage,create} from "../helper/uploadImage";


export default function LabelScreen({ route, navigation }) {
    const { uri } = route.params
    const [data, setData] = useState({ className: "", productName: "", measuredUnit: "" })
    const measuredUnit = [{
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
        try {
            // upload image
            let imageData = await uploadImage(uri)
            // check image saved successfully
            if(imageData!=undefined){
                data.image = imageData.public_id
                //save data to mongodb
                let annotationData = await create(data)
                if(annotationData.error===undefined){
                    console.log('Successfully saved data',annotationData)
                }else{
                    console.log('Saving data failed',annotationData)
                }
           }
        } catch (error) {
            console.log("form handleSubmit",error)
        }
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
                onChangeText={e => handleOnChange("measuredUnit", e)}
                data={measuredUnit}
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