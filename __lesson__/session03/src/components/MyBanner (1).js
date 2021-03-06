import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const MyBanner = (props) => {
  // function chechActiveStatus(){
  //     if (props.isActive){
  //         return null
  //     }else{
  //         return <Text>Aktif değil</Text>
  //     }
  // }
  return (
    <View style={[styles.container, { backgroundColor: props.color }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, }}>
          <Text style={styles.text}>{props.title}</Text>
          <Text>{props.desc}</Text>
        </View>
        {/* <Text>Aktif değil</Text> */}
        {/* {chechActiveStatus()} */}
        {!props.isActive && <Text>Aktif değil</Text>}
      </View>
    </View>
  );
};
export default MyBanner;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});