import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Home from './screens/Home';
import Block from './components/Block';
import AppText from './components/AppText';
import * as theme from './theme';
import Header from './components/Header';
import ListItem from './components/ListItem';
import * as data from './mocks';
import Navigator from './config/StackNavigator';

const App = () => {
  // const [requests, setRequests] = useState(data.requests);

  return (
    <Navigator />
  );
};

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: theme.colors.primary,
//   },
//   requests: {
//     marginTop: -40,
//     zIndex: -1,
//     paddingTop: 55 + 20,
//     paddingHorizontal: 15,
//   },
//   requestHeader: {
//     justifyContent: "space-between",
//     paddingBottom: 15,
//     paddingHorizontal: 20,
//   }
// });

export default App;
