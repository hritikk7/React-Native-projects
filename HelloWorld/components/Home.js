import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <>
      <View style={{padding: 10, flex: 1}}>
        <Text>DropDown</Text>
        <View>
            <Text>sdfgdsfgdsfgsdg</Text>
            <Text>sdfgdsfgdsfgsdg</Text>
            <Text>sdfgdsfgdsfgsdg</Text>
            <Text>sdfgdsfgdsfgsdg</Text>
            <Text>sdfgdsfgdsfgsdg</Text>
        </View>
      </View>
    </>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    backgroundColor: 'red',
  },
  btn: {
    backgroundColor: 'oldlace',
  },
  buttonContainer: {
    margin: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#20232a',
    backgroundColor: 'lightgrey',
  },
});

export default Home;
