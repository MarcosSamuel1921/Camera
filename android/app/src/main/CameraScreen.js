import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { captureImage } from './fileUtils';

const CameraScreen = () => {
  const cameraRef = useRef(null);

  useEffect(() => {
    requestStoragePermission();
  }, []);

  const requestStoragePermission = async () => {
    // Aqui você pode implementar a lógica para solicitar permissão de armazenamento
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      captureImage(data.base64); // Salva a imagem capturada no armazenamento
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        captureAudio={false}
      />

      <TouchableOpacity onPress={takePicture}>
        {/* Aqui você pode adicionar um ícone ou botão para capturar a imagem */}
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
