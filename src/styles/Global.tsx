import {StyleSheet} from 'react-native';
import Colors from './Colors';
import { height, statusBarHeight, width } from './Dimension';

const globalStyles = StyleSheet.create({
  fontBlack: {
    color: Colors.primaryFontColor,
  },
  fontWhite: {
    color: Colors.tertiaryFontColor,
  },
  fontGrey: {
    color: Colors.secondaryFontColor,
  },
  fullScreenContainer:{
    height:height+statusBarHeight,
    width:width,
    paddingTop:statusBarHeight,
    backgroundColor:"#ffff",
    color:"#000",
  }
});

export default globalStyles;
