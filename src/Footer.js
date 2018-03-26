import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Copyright @intanpebriyanti</Text>
    </View>
  );
};
const styles = {
  backFooter: {
    backgroundColor: '#FFD600',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 10,
    position: 'relative',
  },
    textStyle: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Footer;
