import React from 'react'
import { View, StyleSheet} from 'react-native'
import * as theme from '../theme';

const Block = ({style, children , center , middle , row , color , flex , shadow , card }) => {

   const blockStyles = {
      flexDirection: "column",
      alignItems: center && "center",
      flexDirection: row && "row",
      justifyContent: middle && "center",
      flex: flex,
      borderRadius: card && theme.sizes.border,
   }

   const blockShadow = shadow && {
      // shadowColor: theme.colors.gray,
      // shadowOffset: { width: 0, height: 0 },
      // shadowOpacity: 0.1,
      // shadowRadius: 10,
   
      shadowColor: theme.colors.black,
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      
      elevation: 5,
   }


   return (
      <View style={{...styles.container, ...blockStyles , ...styles[color] , ...blockShadow , ...style }}>
         {children}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   primary: {backgroundColor: theme.colors.primary},
   secondary: {backgroundColor: theme.colors.secondary},
   tertiary: {backgroundColor: theme.colors.tertiary},
   accent: {backgroundColor: theme.colors.accent},
   black: {backgroundColor: theme.colors.black},
   gray: {backgroundColor: theme.colors.gray},
   gray2: {backgroundColor: theme.colors.gray2},
   white: {backgroundColor: theme.colors.white},
})

export default Block
