/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Touchable,
  OpaqueColorValue,
} from 'react-native';

import Voltage from './components/Voltage';
import RealTimeData from './components/RealTimeData';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const colors = {
    themeColor: '#30263b',
    white: '#444',
    background: '#f4f6fc',
    greyish: '#a4a4a4',
    titn: '2b49c3',
  };

  const [toggle, setToggle] = useState(false);

  return (
    // <LinearGradient colors={['#56CCF2', '#2F80ED']} styles={{flex:1, justifyContent:'center'}}>
    <View style={{flex: 1, backgroundColor: colors.themeColor,}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={{flex: 0.5, backgroundColor:colors.themeColor, paddingBottom: 10, marginTop:15}}>
        <View style={{marginHorizontal: 5}}>
          <View style={{flexDirection: 'row', margin: 7, marginHorizontal: 12}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => setToggle(true)}
                style={{
                  height: 50,
                  width: 150,
                  // paddingHorizontal: 8,
                  // paddingVertical: 6,
                  borderRadius: 6,
                  // backgroundColor: '#34495e',
                  // alignSelf: 'flex-start',
                  marginHorizontal: '5%',
                  minWidth: '48%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: 'white',
                  borderWidth: 2,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'white',
                  }}>
                  Real time data
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <TouchableOpacity
                onPress={() => setToggle(false)}
                style={{
                  height: 50,
                  width: 150,
                  // paddingHorizontal: 8,
                  // paddingVertical: 6,
                  borderRadius: 6,
                  // backgroundColor: '#4b4453',
                  alignSelf: 'flex-start',
                  marginHorizontal: '5%',
                  minWidth: '48%',
                  // textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: 'white',
                  borderWidth: 2,
                }}>
                <Text style={{fontSize: 16, color: 'white'}}>
                  Historical data{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {toggle ? (
        <>
          <Voltage />

          <View style={{flex: 3}}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 32,
                  padding: 10,
                  color: 'white',
                  fontWeight: 'bold',
                  letterSpacing: 2,
                }}>
                CURRENT
              </Text>
              <View style={{height: 2, width: 80, backgroundColor: 'white'}}></View>

              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  borderRadius: 6,
                  height: 50,
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  margin: 30,
                  borderColor: 'black',
                  // borderWidth: 2
                }}>
                <Text style={{fontSize: 18}}>Ia: 0</Text>
                <Text style={{fontSize: 18}}>Ib: 0</Text>
                <Text style={{fontSize: 18}}>Ic: 0</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 20,
                  marginHorizontal: 20,
                  // backgroundColor: "purple",
                  height: 80,
                  width: '90%',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 6,
                    width: '40%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 20,
                    borderColor: 'black',
                    // borderWidth: 2
                  }}>
                  <Text style={{fontSize: 18}}>Frequency:</Text>
                  <Text style={{fontSize: 18}}> 0</Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 6,
                    width: '40%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 20,
                    borderColor: 'black',
                    // borderWidth: 2
                  }}>
                  <Text style={{fontSize: 18}}>Power Factor:</Text>
                  <Text style={{fontSize: 18}}> 0</Text>
                </View>
              </View>
            </View>
          </View>
        </>
      ) : (
        <RealTimeData />
      )}
    </View>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
