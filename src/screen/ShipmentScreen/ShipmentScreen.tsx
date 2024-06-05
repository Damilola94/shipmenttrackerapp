import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NotificationIcon from '../../../assets/icons/NotificationIcon';
import FilterIcon from '../../../assets/icons/FilterIcon';
import CheckIcon from '../../../assets/icons/CheckIcon';
import ScanIcon from '../../../assets/icons/ScanIcon';
import {data} from '../../../sample-data/data';
import ShipmentsCard from '../../components/ShipmentsCard';
import {resHeight} from '../../../utils/utils';
import BottomSheet from '../../components/ButtomSheet/BottomSheet';

import shipmentLogo from '../../../assets/logo/shipment-logo.png';
import user from '../../../assets/user/user.png';

const {width} = Dimensions.get('window');

const statuses = [
  'Received',
  'Putaway',
  'Delivered',
  'Canceled',
  'Rejected',
  'Lost',
  'On Hold',
];

const ShipmentScreen: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={user} style={styles.userImage} />
        <Image source={shipmentLogo} style={styles.logo} />
        <TouchableOpacity style={styles.notification}>
          <NotificationIcon />
        </TouchableOpacity>
      </View>

      <Text style={styles.greetingTextHello}>Hello,</Text>
      <Text style={styles.greetingText}>Ibrahim Shaker</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tabButton} onPress={showModal}>
          <FilterIcon />
          <Text style={styles.tabText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, {backgroundColor: '#2f50c1'}]}>
          <ScanIcon />
          <Text style={[styles.tabText, {color: 'white'}]}>Add Scan</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.shipmentsContainer}>
        <Text style={styles.shipmentsText}>Shipments</Text>
        <TouchableOpacity style={styles.markAllContainer}>
          <CheckIcon />
          <Text style={styles.markAllText}>Mark All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ShipmentsCard item={item} />}
      />

      {visible && (
        <BottomSheet
          isVisible={visible}
          closeModal={hideModal}
          animationType="slide"
          height={1}
          contentStyle={{alignItems: 'center'}}>
          <View style={styles.filterHeader}>
            <TouchableOpacity onPress={hideModal}>
              <Text style={styles.filterHeaderText}>Cancel</Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.filterHeaderText,
                {
                  color: '#000000',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginRight: 5,
                },
              ]}>
              Filters
            </Text>
            <TouchableOpacity onPress={hideModal}>
              <Text style={styles.filterHeaderText}>Done</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.shipmentStatusContainer}>
            <Text style={styles.shipmentStatusHeader}>SHIPMENT STATUS</Text>
          </View>

          <View style={styles.statusContainer}>
            {statuses.map((status, index) => (
              <View key={index} style={styles.statusItem}>
                <Text style={styles.statusText}>{status}</Text>
              </View>
            ))}
          </View>
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  greetingTextHello: {
    fontSize: 14,
    fontWeight: '100',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  greetingText: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f2f8',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f2f8',
    borderRadius: 10,
    width: (width - 60) / 2,
  },
  tabText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '300',
  },
  notification: {
    backgroundColor: '#f4f2f8',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shipmentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 30,
  },
  shipmentsText: {
    fontSize: 22,
    fontWeight: '500',
  },
  markAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  markAllText: {
    marginLeft: 5,
    fontSize: 18,
    color: '#2f50c1',
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  filterHeaderText: {
    fontSize: 16,
    color: '#2f50c1',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#ECECEC',
    marginBottom: 20,
  },
  shipmentStatusHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#585363',
    textAlign: 'left',
  },
  shipmentStatusContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  statusItem: {
    width: '30%',
    backgroundColor: '#f4f2f8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ShipmentScreen;
