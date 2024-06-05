import { isIphoneX } from 'react-native-iphone-x-helper';
import { Platform, StatusBar, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

const deviceHeight = isIphoneX()
  ? height - 78 // iPhone X style SafeAreaView size in portrait
  : Platform.OS === 'android'
  ? height - StatusBar.currentHeight
  : height;

const responsiveHeight = (h) => {
  return height * (h / 100);
};

const responsiveWidth = (w) => {
  return width * (w / 100);
};

const RFValue = (fontSize) => {
  // guideline height for standard 5" device screen
  const standardScreenHeight = 680;
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

export const formatAmount = (number = 0) => {
  const formattedNumber = number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedNumber;
};

export const roundNegativeTowardsZero = (num) => {
  return num < 0 ? 0 : num;
};

export const toTitleCase=(str)=> {
  return str?.replace(/\w\S*/g, function(txt) {
    return txt?.charAt(0)?.toUpperCase() + txt?.substr(1)?.toLowerCase();
  });
}

export const resFont = (val) => RFValue(val);
export const resHeight = (val) => responsiveHeight(val);

export const resWidth = (val) => responsiveWidth(val);