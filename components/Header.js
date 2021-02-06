import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import * as theme from '../theme';
import Block from '../components/Block';
import AppText from '../components/AppText';
import { LineChart } from 'react-native-svg-charts';

const Header = () => {
  return (
    <View style={styles.container}>
      <Block flex={1} style={{paddingHorizontal: 15}}>
        <Block row center style={{paddingVertical: 15, justifyContent: "space-between"}}>
        <Block></Block>
          <AppText style={{alignSelf: "center", marginRight: -35}} size="title" color="white" bold>
            Blood Requests
          </AppText>
          <Block>
            <Image style={styles.avatar} source={require("../assets/images/placeholder.jpg")} />
          </Block>
        </Block>
        <Block card shadow flex={1} color="white" style={styles.headerChart}>
          <Block
            row
            center
            style={{paddingHorizontal: 30, justifyContent: 'space-between'}}>
            <Block>
              <Block row center size="h1">
                <AppText size="h1" color="secondary" bold>
                  291
                </AppText>
                <AppText size="caption" color="tertiary" style={{paddingHorizontal: 10}} bold>
                  -12%
                </AppText>
              </Block>
              <AppText size="caption" color="black" light>
                Available
              </AppText>
            </Block>
            <Block>
              <Block row center size="h1">
                <AppText size="caption" color="primary" style={{paddingHorizontal: 10}} bold>
                  +49%
                </AppText>
                <AppText size="h1" color="secondary" bold>
                  481
                </AppText>
              </Block>
              <AppText
                size="caption"
                color="black"
                style={{textAlign: 'right'}}
                light>
                Requests
              </AppText>
            </Block>
          </Block>
          <Block center middle style={{marginTop: 30}} flex={1}>
            <AppText size="h1" color="primary" bold>
              Bloodi
            </AppText>
          </Block>
        </Block>
      </Block>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.45,
  },
  headerChart: {
    paddingTop: 30,
    paddingBottom: 45,
    zIndex: 2,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 5,
  }
});

export default Header;
