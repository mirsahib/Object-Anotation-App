import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


export default function CameraScreen({ navigation }) {
  
  const [camera,setCamera] = useState(null)
  const [imageUri,setImageUri] = useState(null)

  useEffect(() => {
    permission()
    console.log("image uri is",imageUri)
    if(imageUri!=null){
      savePicture()
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
    const photo = await camera.takePictureAsync()
    setImageUri(photo.uri)
  }

  const savePicture = async ()=>{
    const status = await MediaLibrary.requestPermissionsAsync()
    if(status.granted){
      const assert = await MediaLibrary.createAssetAsync(imageUri)
      const result = await MediaLibrary.createAlbumAsync('Grocery',assert,true)
      setImageUri(null)
      console.log("image ",result)
    }
    // if(status === 'granted'){
    //   const assert = MediaLibrary.createAssetAsync(imageUri)
    //   const result = await MediaLibrary.createAlbumAsync('Grocery',assert)
    //   console.log("image ",result)
    // }else{
    //   Alert.alert("You don't have any access")
    // }
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