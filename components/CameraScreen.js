import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';



export default function CameraScreen({ navigation }) {
  
  const [camera,setCamera] = useState(null)
  const [imageUri,setImageUri] = useState(null)

  useEffect(() => {
    permission()
    //console.log("image uri is",imageUri)
    if(imageUri!=null){
      navigation.navigate('Label',{
        uri:imageUri
      })
      //console.log("current ",imageUri)
    }
  },[imageUri])

  const permission = async ()=>{
    const { status } = await Camera.requestPermissionsAsync()
      if (status != 'granted') {
        Alert.alert("Access denied")
        //unmount component
      }
  }

  const takePicture = async ()=>{
    const option =  { quality: 0.7, base64: true };
    const photo = await camera.takePictureAsync(option)
    setImageUri(photo.base64)
  }

 


  return (
    <View style={styles.container}>

      <Camera
        style={{ flex: 1, width: "100%" }}
        ref={(r) => {
          setCamera(r)
        }}
      >
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            flex: 1,
            width: '100%',
            padding: 20,
            justifyContent: 'space-between'
          }}
        >
          <View
            style={{
              alignSelf: 'center',
              flex: 1,
              alignItems: 'center'
            }}
          >
            <TouchableOpacity
            onPress={takePicture}
              style={{
                width: 70,
                height: 70,
                bottom: 0,
                borderRadius: 50,
                backgroundColor: '#fff'
              }}
            />
          </View>
        </View>

      </Camera>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})