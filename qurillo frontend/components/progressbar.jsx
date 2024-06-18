// ProgressBar.js
import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const ProgressBar = () => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(progress, {
          toValue: 0.1,
          duration: 1600,
          useNativeDriver: false,
        }),
        Animated.timing(progress, {
          toValue: 0.24,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(progress, {
          toValue: 0.41,
          duration: 720,
          useNativeDriver: false,
        }),
        Animated.timing(progress, {
          toValue: 0.5,
          duration: 520,
          useNativeDriver: false,
        }),
        Animated.timing(progress, {
          toValue: 0.52,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(progress, {
          toValue: 0.6,
          duration: 280,
          useNativeDriver: false,
        }),
        Animated.timing(progress, {
          toValue: 0.76,
          duration: 160,
          useNativeDriver: false,
        }),
        Animated.timing(progress, {
          toValue: 0.86,
          duration: 1520,
          useNativeDriver: false,
        }),
        Animated.timing(progress, {
          toValue: 1,
          duration: 480,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [progress]);

  const progressBarWidth = progress.interpolate({
    inputRange: [2, 8],
    outputRange: ['40%', '40%'],
  });

  return (
    <View style={styles.progressBar}>
      <View style={styles.bar}>
        <Animated.View style={[styles.progress, { width: progressBarWidth }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    borderRadius: 60,
    overflow: 'hidden',
    width: '90%',
    height: 10,
  },
  bar: {
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    height: '100%',
  },
  progress: {
    backgroundColor: '#75b800',
    height: '100%',
  },
});

export default ProgressBar;
