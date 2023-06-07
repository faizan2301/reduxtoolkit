'use strict';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import actions from '../Redux/action';
import axios from 'axios';
const Home = props => {
  console.log("Home")
  const [data, setdata] = useState([]);
  const counterValue = useSelector(state => state.counterReducer);
  useEffect(() => {
    (async () => {
      try {
        var data = await actions.getPost();
        setdata(data);
      } catch (error) {
        console.log('Error', error);
      }
    })();
  }, []);

  // const dispatch = useDispatch();
  // console.log('number', number);
  // const onAdd = () => {
  //   // dispatch(increment(number));
  //   actions.increment(number);
  // };
  // const onSub = () => {
  //   // dispatch(decrement(number));
  //   actions.decrement(number);
  // };
  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.boxView}>
        <Text style={styles.textStyle}>
          {item.id}. {item.title}
        </Text>
        <Text style={styles.textBody}>{item.body}</Text>
        <Pressable style={styles.delete} onPress={() => deletePost(item.id)}>
          <Text style={{color: 'white'}}>Delete</Text>
        </Pressable>
      </View>
    );
  };
  const deletePost = async id => {
    try {
      var res = await actions.deletePost(id);
      console.log(res.status);
      if (res.status == 200) {
        let arr = [...data];
        let modArray = arr.filter((val, i) => {
          if (val.id !== id) {
            return val;
          }
        });
        setdata(modArray);
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      console.log('Error', error);
    }
  };
  const incrementDecrement = type => {
    console.log('first', type);
    if (type === '+') {
      actions.increment(counterValue.num+1);
    } else {
      actions.decrement(counterValue.num-1);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'black'}}>{counterValue.num}</Text>
      {/* <Pressable onPress={() => incrementDecrement('+')} style={styles.delete}>
        <Text style={{color: 'white'}}>Increment</Text>
      </Pressable>
      <Pressable onPress={() => incrementDecrement('-')} style={styles.delete}>
        <Text style={{color: 'white'}}>Decreament</Text>
      </Pressable> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{marginBottom: 15}} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 4,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  textBody: {
    color: 'black',
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: 'purple',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
  },
  boxView: {
    borderWidth: 3,
    padding: 14,
    marginHorizontal: 4,
    borderRadius: 8,
    borderColor: 'black',
  },
  delete: {
    marginTop: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
