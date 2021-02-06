import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Block from "../components/Block";
import AppText from '../components/AppText';
import * as theme from '../theme';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import * as data from '../mocks';

const Home = () => {
  const [requests, setRequests] = useState(data.requests);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Header />
      <Block flex={0.8} column color="gray2" style={styles.requests}>
        <Block row style={styles.requestHeader}>
          <AppText light>Recent Updates</AppText>
          <TouchableOpacity activeOpacity={0.8}>
            <AppText semibold>View All</AppText>
          </TouchableOpacity>
        </Block>
        <ScrollView>
          {requests.map((req) => (
            <TouchableOpacity activeOpacity={0.8} key={req.id}>
              <ListItem item={req} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  requests: {
    marginTop: -40,
    zIndex: -1,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
  },
  requestHeader: {
    justifyContent: "space-between",
    paddingBottom: 15,
    paddingHorizontal: 20,
  }
});

export default Home;
