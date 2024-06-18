import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonCustom from '../components/ButtonCustom';
import Share from 'react-native-share';


const ShareScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const shareLink=()=>{
    const options={
        message:"Hey , please come and join us on coain",
        url:"https://www.google.co.in/"
    }
    Share.open(options)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err && console.log(err);
  });
  }

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:7000/getInvitedUsers');
      response && response.data && response.data.response &&
      setUsers(response.data.response);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <Image source={{ uri: item.profileImage }} style={styles.profImage} />
      <View style={styles.userDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.ustd}>{item.ustd}</Text>
        <Text style={{flex:0.75}}>
        <Icon name="angle-right" size={25} color="#75b800" />
        </Text>

      </View>
    
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
      <ButtonCustom
      title="Share Invite Link"
      styling={styles.customButton}
      tap={shareLink}
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userItem: {
    flexDirection: 'row',
  paddingVertical:20,
    backgroundColor:"white",
  },
  profImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userDetails: {
    flex: 1,
    justifyContent: 'center',
    flexDirection:'row',
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
   fontFamily: 'Nunito-VariableFont_wght',
   flex:3.5,
   color:"black"
  },
  ustd: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
   fontFamily: 'Nunito-VariableFont_wght',
    flex:1.5
  },
  listContent: {
    paddingBottom: 60, // Ensure content is not hidden behind any other UI elements
  },
  customButton: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    right: 0,
    backgroundColor: '#bdff48',
    paddingVertical: 10,
    width: '80%',
    borderRadius: 30,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
});

export default ShareScreen;
