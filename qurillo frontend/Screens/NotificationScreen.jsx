import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  Button,
} from 'react-native';
import axios from 'axios';
import ButtonCustom from '../components/ButtonCustom';

const NotificationScreen = ({navigation}) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:7000/getNotification');
      response && response.data && response.data.resopnse;
      setNotifications(response.data.response);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.notificationItem}>
      <Image source={{uri: item.iconImage}} style={styles.iconImage} />
      <View style={styles.notificationDetails}>
        <Text style={styles.head}>{item.head}</Text>
        <View style={{flexDirection: 'row', gap: 20}}>
          <Text style={styles.date}>{item.date}</Text>
          <Text>|</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.des}>{item.des}</Text>
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
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={item => item._id.toString()}
        renderItem={renderItem}
      />
      <View style={styles.buttonContainer}>
        <ButtonCustom
          title="Continue"
          styling={styles.customButton}
          tap={() => navigation.navigate('My Rewards')}
        />
      </View>
    </View>
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
  notificationItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
  },
  iconImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderWidth: 4,
  },
  notificationDetails: {
    flex: 1,
  },
  head: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  des: {
    fontSize: 14,
    marginTop: 5,
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

export default NotificationScreen;
