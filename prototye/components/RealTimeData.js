// import React from 'react'
// import {View, Text} from 'react-native'
// const RealTimeData = () =>{
//     return (
//         <>
//             <View>
//                 <Text>
//                     vj hjvlihvikhk
//                 </Text>
//             </View>
//         </>
//     )
// }

// export default RealTimeData

import React, {useState} from 'react';
import {View, Button, Platform, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const RealTimeData = () => {
  const [voltageProfDate, setVoltageProfDate] = useState(
    new Date(1598051730000),
  );
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || voltageProfDate;
    setShow(Platform.OS === 'ios');
    setVoltageProfDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const mydate = voltageProfDate.toString();
  const mydate2 = voltageProfDate.getDate();
  const month = voltageProfDate.getMonth();
  const year = voltageProfDate.getFullYear();
  const weekday = voltageProfDate.getDay();
  console.log(weekday);
  // var options = { weekday: 'long'};
  // console.log(new Intl.DateTimeFormat('en-US', options).format(voltageProfDate));
  // const dayName = new Intl.DateTimeFormat('en-US', options).format(voltageProfDate)

  return (
    <View style={{flex: 5.5, height: '100%',}}>
      <View style={{alignItems: 'center', }}>
        <Text
          style={{
            fontSize: 30,
            padding: 10,
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: 2,
            // backgroundColor:"red",
          }}>
          VOLTAGE PROFILE
        </Text>
        <View style={{margin:10}}>
          <TouchableOpacity
            onPress={showDatepicker}
            style={{
              height: 50,
              width: 250,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 0,
              borderRadius: 6,
            }}>
            <Text style={{fontSize: 20}}>Select date</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View> */}
      {/* <Text>{mydate2}</Text>
        <Text>{month}</Text>
        <Text>{year}</Text> */}
      {/* <Text>{dayName}</Text> */}
      {/* <Text>{day}</Text> */}
      {/* </View> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={voltageProfDate}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View
        style={{
          height: '100%',
          width: '100%',
          // backgroundColor: 'blue',
          // /  justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* asdf */}
        <View
          style={{
            height: '30%',
            // backgroundColor:"tan",
            width: '100%',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 6,
              width: '40%',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
              borderColor: 'black',
            }}>
            <Text style={{fontSize: 18, margin: 0}}>Click to see</Text>
            <Text style={{fontSize: 18, margin: 0}}> houerly Voltage</Text>
            <Text style={{fontSize: 18, margin: 0}}> curve</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 6,
              width: '40%',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
              borderColor: 'black',
            }}>
            <Text style={{fontSize: 20, margin: 10}}>V max = 0</Text>
            <Text style={{fontSize: 20, margin: 10}}>V max = 0</Text>
          </View>
        </View>
        {/* sdfsf */}
        <View
          style={{
            height: '30%',
            // backgroundColor:"tan",
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            margin:10
          }}>
          <Text
            style={{
              fontSize: 28,
              padding: 10,
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 2,
              // backgroundColor:"red",
            }}>
            ENERGY CONSUMPTION
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderRadius: 6,
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
              borderColor: 'black',
              height: 120,
            }}>
            <Text style={{fontSize: 18, marginTop: 10}}>Click to see</Text>
            <Text style={{fontSize: 18, margin: 0}}>Energy consumption</Text>
            <Text style={{fontSize: 18, marginBottom: 10}}> curve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RealTimeData;
