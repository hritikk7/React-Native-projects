import React from 'react';
import {View, Text} from 'react-native';

const Voltage = () => {
  return (
    <>
      <View
        style={{
          flex: 3,

          //  backgroundColor: 'pink',
        }}>
        <View style={{alignItems: 'center', height: '100%'}}>
          <Text style={{fontSize: 32, padding: 10, color: 'white', fontWeight:'bold',letterSpacing:2, marginTop:10,}}>
            VOLTAGE
          </Text>
          <View style={{height:2, width:80, backgroundColor:"white"}}></View>
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
            <Text style={{fontSize: 18}}>Ia:   0</Text>
            <Text style={{fontSize: 18}}>Ib:   0</Text>
            <Text style={{fontSize: 18}}>Ic:   0</Text>
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
              <Text style={{fontSize: 18}}>Active Power</Text>
              <Text style={{fontSize: 18}}>0</Text>
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
                  // borderWidth: 2,
                  padding: 2,
            
              }}>
              <Text style={{fontSize: 18}}>Reactive Power:</Text>
              <Text style={{fontSize: 18}}>0</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Voltage;
