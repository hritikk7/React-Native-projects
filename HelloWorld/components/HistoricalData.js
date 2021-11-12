import React, { useState } from 'react'
import {View, StyleSheet, Text} from 'react-native'

const HistoricalData = () =>{
    const [voltage, setVoltage] = useState([
        {title : "0", key: 1},
        {title : "0", key: 2},
        {title : "0", key: 3}
    ]);
    const [activePower, setActivePower] = useState(0);
    const [reactivePower, setReactivePower] = useState(0);

    return(
        <View style={styles.container}>
            <Text>Historical data</Text>
        </View>
    );
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
})


export default HistoricalData;