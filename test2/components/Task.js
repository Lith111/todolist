import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({ text }) => {
  return (
    <View style={styles.item}>
    <View style={styles.itemLeft}>
      <View style={styles.square}></View>
      <Text style={styles.itemText}>{text}</Text>
    </View>
    <View style={styles.circular}></View>
  </View>
  );
};
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#720455',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      itemLeft: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
      square: {
        width: 24,
        height: 24,
        backgroundColor: '#030637',
        opacity: 0.2,
        borderRadius: 5,
        marginLeft: 15,
      },
      itemText: {
        maxWidth: '80%',
        color:"#030637"
      },
      circular: {
        width: 12,
        height: 12,
        borderColor: '#030637',
        borderWidth: 2,
        borderRadius: 5,
      },    
});
export default Task;
