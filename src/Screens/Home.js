'use strict';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import actions from '../Redux/action';

const Home = props => {
  console.log('props', props);

  const number = useSelector(state => state.counterReducer.num);
  // const dispatch = useDispatch();
  console.log('number', number);
  const onAdd = () => {
    // dispatch(increment(number));
    actions.increment(number);
  };
  const onSub = () => {
    // dispatch(decrement(number));
    actions.decrement(number);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home</Text>
      <Text style={styles.textStyle}>{number}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          onAdd();
        }}>
        <Text style={styles.textStyle}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          onSub();
        }}>
        <Text style={styles.textStyle}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'deepskyblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonStyle: {
    backgroundColor: 'purple',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
  },
});
