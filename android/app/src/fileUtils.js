import RNFS from 'react-native-fs';

const captureImage = async (base64Data) => {
  const filePath = `${RNFS.DocumentDirectoryPath}/image.jpg`;

  try {
    await RNFS.writeFile(filePath, base64Data, 'base64');
    console.log('Imagem salva:', filePath);
  } catch (error) {
    console.log('Erro ao salvar a imagem:', error);
  }
};

export { captureImage };
