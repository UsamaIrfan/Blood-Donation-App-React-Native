import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as theme from '../theme';

const AppText = ({children , size , color , light , bold , semibold , style}) => {

   const textStyles = {
      // Weight
      fontWeight: bold ? styles.bold : light ? styles.light : semibold ? styles.semibold : styles.normal,
      // Color
      color: color in styles ? styles[color] : {color: color},
      size: size in styles ? styles[size] : {fontSize: size}
   }

  return (
   <Text style={{...styles.text , ...styles[size], ...styles[color], ...textStyles.fontWeight, ...textStyles.color, ...textStyles.size , ...style}}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: theme.sizes.font,
    color: theme.colors.black,
  },
  

  // Font Sizes from default theme
  base: {fontSize: theme.sizes.base},
  font: {fontSize: theme.sizes.font},
  border: {fontSize: theme.sizes.border},
  h1: {fontSize: theme.sizes.h1},
  h2: {fontSize: theme.sizes.h2},
  h3: {fontSize: theme.sizes.h3},
  title: {fontSize: theme.sizes.title},
  body: {fontSize: theme.sizes.body},
  caption: {fontSize: theme.sizes.caption},
  small: {fontSize: theme.sizes.small},

  // Colors from default theme
  primary: {color: theme.colors.primary},
  secondary: {color: theme.colors.secondary},
  tertiary: {color: theme.colors.tertiary},
  accent: {color: theme.colors.accent},
  black: {color: theme.colors.black},
  gray: {color: theme.colors.gray},
  gray2: {color: theme.colors.gray2},
  white: {color: theme.colors.white},

  // Styling 
  bold: {fontFamily: "Montserrat-Bold"},
  light: {fontFamily: "Montserrat-Light"},
  semibold: {fontFamily: "Montserrat-SemiBold"},
  normal: {fontFamily: "Montserrat-Regular"}
});

export default AppText;
