import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileImage = ({image,uploadImage}) => {
  return (
    <TouchableOpacity
      style={
        image
          ? [styles.imageContainer,{borderWidth:0}]
          : [styles.imageContainer, styles.defaultBackgorund,]
      }
      onPress={uploadImage}>
      {image ? (
        <Image
          source={{uri: image}}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
        />
      ) : (
        <View style={{alignItems: 'center'}}>
          <Text>
            <Icon name="image" size={30} color="#ABABAB" />;
          </Text>
          <Text>Select File</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 3,
    borderColor: '#75b800',
    borderRadius: 30,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 55,
  },
  defaultBackgorund: {
    backgroundColor: '#EBF2EF',
    height: '25%',
  },
  DefaultText: {
    fontSize: 30,
    fontFamily: 'Nunito-VariableFont_wght',
  },
});
export default ProfileImage;
