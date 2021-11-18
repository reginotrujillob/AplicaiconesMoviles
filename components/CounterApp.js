import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles/Styles';

const CounterApp = () => {
  // Map states
  const count = useSelector((state) => state.counter.count);

  // Map Dispatchers
  const dispatch = useDispatch();

  const increaseCount = () => dispatch({ type: 'counter/increase_count' });
  const decreaseCount = () => dispatch({ type: 'counter/decrease_count' });

  const styleSheet = styles()

  return (
    <View style={styles.pick(styleSheet, 'container')}>
      <View style={styles.pick(styleSheet, 'content')}>
        <TouchableOpacity onPress={increaseCount}>
          <Text style={styles.pick(styleSheet, 'fs_20')}>Increase</Text>
        </TouchableOpacity>
        <Text style={styles.pick(styleSheet, 'fs_20')}>{count}</Text>
        <TouchableOpacity onPress={decreaseCount}>
          <Text style={styles.pick(styleSheet, 'fs_20')}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterApp;
