import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Heading from '../components/Heading';
import ButtonCustom from '../components/ButtonCustom';
import ImagePicker from 'react-native-image-crop-picker';
// import {defaultImage} from '../assets/assets';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileImage from '../components/ProfileImage';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {
  const [image, setImage] = useState('');

  const sendImage = async data => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:7000/uploadData',
        data,
      );
      const datum =
        response.data && response.data.user && response.data.user.image;
      setImage(datum);
    } catch (err) {
      console.error({message: err});
    }
  };

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      includeBase64: true,
      avoidEmptySpaceAroundImage: true,
    }).then(image => {
      const base64Image = `data:${image.mime};base64,${image.data}`;
      sendImage({image: base64Image});
    });
  };

  const takePicture = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const continueNavigation=()=>{
navigation.navigate('Notifications')
  }

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Heading
        desc="Upload a Photo of you national ID card"
        Textstyling={{
          fontSize: 30,
          fontFamily: 'Nunito-VariableFont_wght',
          fontWeight: 700,
          paddingHorizontal: 25,
          paddingVertical:20,
        }}
      />
    <Text>
    
    </Text>  
      <Heading 
      desc="Regulation require you to upload a national identity card. Don't worry your data will be safe and private"
      Textstyling={{
        fontSize: 15,
        fontWeight: 600,
        fontFamily: 'Nunito-VariableFont_wght',
        paddingHorizontal: 25,
      }} />
      <ProfileImage image={image} uploadImage={uploadImage}/>
      
      <ButtonCustom title="Open Camera & Take Photo" tap={takePicture} vectorIcon={ <Icon name="camera" size={20} color="#75b800" />} styling={styles.customButton}/>


      <ButtonCustom title="continue" tap={continueNavigation}  styling={[styles.customButton, {marginTop:130}]}/>
   
      
    </SafeAreaView>
  );
};


const styles=StyleSheet.create({
  customButton:{
backgroundColor:"#bdff48",
paddingVertical:10,
width:'80%',
borderRadius:30, 
flexDirection:"row",
gap:20,
justifyContent:'center',

  }
})
export default HomeScreen;
