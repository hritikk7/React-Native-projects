import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, StyleSheet, Text, View} from 'react-native';
const Test = () => {
  const [isRealitimeData, setRealTimedata] = useState(true);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
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

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Realtime" onPress={() => setRealTimedata(true)} />
        <Button title="History" onPress={() => setRealTimedata(false)} />
      </View>

      {isRealitimeData ? (
        <View style={styles.viewRealtimeContent}>
          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Voltage</Text>
              <View style={styles.subSection}>
                <Text>Va: 0</Text>
                <Text>Vb: 0</Text>
                <Text>Vc: 0</Text>
              </View>
            </View>
            <Text style={styles.title}>Active Power</Text>
            <Text style={styles.title}>Reactive Power</Text>
          </View>
          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Current</Text>
              <View style={styles.subSection}>
                <Text>Ia: 0</Text>
                <Text>Ib: 0</Text>
                <Text>Ic: 0</Text>
              </View>
            </View>
            <Text style={styles.title}>Frequency</Text>
            <Text style={styles.title}>Power Factor</Text>
          </View>
        </View>
      ) : (
        <View style={styles.viewHistoryContent}>
          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Voltage profile</Text>
              <View>
                <View>
                  <Button onPress={showDatepicker} title="select Date" />
                </View>

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
              <View style={styles.subSection}>
                <Text>Va: 0</Text>
                <Text>Vb: 0</Text>
                <Text>Vc: 0</Text>
              </View>
            </View>
            <Text style={styles.title}>Active Power</Text>
            <Text style={styles.title}>Reactive Power</Text>
          </View>
          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Current</Text>
              <View style={styles.subSection}>
                <Text>Vmin: 0</Text>
                <Text>Vmax: 0</Text>
                <View>
                  <Text>Hour voltage curve</Text>
                </View>
              </View>
            </View>
            <Text style={styles.title}>Hourley enerrgy consumption curve</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: '100%',
    backgroundColor: 'yellow',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#20232a',
    backgroundColor: 'red',
  },

  viewHistoryContent: {
    backgroundColor: 'green',
    height: '100%',
  },
  viewRealtimeContent: {
    backgroundColor: 'red',
    height: '100%',
    // flex: 1
  },

  //////////////

  title: {
    fontSize: 24,
    backgroundColor: 'purple',
  },
  section: {
    height: '50%',
    backgroundColor: 'skyblue',
    borderWidth: 2,
    margin: 20,
    flex: 1,
    justifyContent: 'center',
  },

  subSection: {
    backgroundColor: 'pink',
    fontSize: 50,
    flexDirection: 'row',
    height: '40%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Test;
