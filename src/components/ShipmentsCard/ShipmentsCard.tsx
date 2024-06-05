import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import box from '../../../assets/user/box.png';
import ArrowUpDown from '../../../assets/icons/ArrowUpDown';
import CheckIcon from '../../../assets/icons/CheckIcon';

interface ShipmentsCard {
  item: { id: string; awb: string; location: string; status: string };
}

const ShipmentsCard: React.FC<ShipmentsCard> = ({ item }) => {


const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ddd',
    backgroundColor: "#f4f2f8",
    marginVertical: 5,
    borderRadius:10
  },
  checkbox: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#666',
  },
  value: {
    fontSize: 13,
    fontWeight: '300',
    color:"#757281"
  },
  valueNum: {
    fontSize: 18,
    fontWeight: '600',
  },
  status: {
    marginLeft: 'auto',
    marginRight: 10,
    fontSize:11,
    padding:5,
    backgroundColor: item?.status == "received" ?"#d9e6fd" : '#f4f2f8',
    color: item?.status == "received" ?"#2f50c1" : '#58536e',
    borderColor: "white",
    borderWidth:1, 
    borderRadius:4
  },
  arrowUpDown: {
    backgroundColor: 'white',
    height: 26,
    width: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.checkbox}>
        <CheckIcon/>
      </TouchableOpacity>
      <Image source={box} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.label, {color:"#3f395c"}]}>AWB</Text>
        <Text style={[styles.valueNum]}>{item?.awb}</Text>
        <Text style={styles.value}>{item?.location}</Text>
      </View>


      <Text style={styles.status}>{item?.status.toUpperCase()}</Text>
      <TouchableOpacity style={styles.arrowUpDown}>
      <ArrowUpDown/>
      </TouchableOpacity>
    </View>
  );
};


export default ShipmentsCard;
