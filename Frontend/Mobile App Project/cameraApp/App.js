
import { Button, Image, Text, View } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Camera, CameraView } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(false)
  const [photo, setPhoto] = useState()
  const cameraRef = useRef(null)
  useEffect(() => {

    async function requestPermission(){
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    requestPermission()
  }, [])

  async function takePhoto(){
    if(cameraRef.current){
      const data = await cameraRef.current.takePictureAsync()
      setPhoto(data.uri)
    }
  }

  if(!hasPermission){
    return<View>
      <Text>Loading...</Text>
    </View>
  }

  return (
    <View style={{flex: 1}}>
      <CameraView ref={cameraRef} style={{flex: 1}}/>
      <Button title='Take Picture' onPress={takePhoto} />
      {photo && <Image source={{ uri: photo }} style={{width:200, height: 200}} />}

    </View>
  );
}

