import React from 'react';
import {StyleSheet} from 'react-native';
import Block from './Block';
import AppText from './AppText';

const ListItem = ({item, style}) => {
  return (
    <Block row color="white" card shadow style={(style, styles.request)}>
      <Block flex={0.24} color="secondary" card style={styles.requestStatus}>
        <Block color="primary" flex={0.25} middle>
          <AppText
            style={{textTransform: 'uppercase', textAlign: 'center'}}
            size="small"
            color="white"
            bold>
            {item.priority}
          </AppText>
        </Block>
        <Block flex={.75} middle>
          <AppText style={{textAlign: 'center'}} size="h2" color="white" bold>
            {item.bloodGroup}
          </AppText>
        </Block>
      </Block>
      <Block flex={0.76} middle>
         <AppText size="h3" bold style={{paddingVertical: 8}}>{item.name}</AppText>
         <AppText size="caption" semibold>{item.city} · {item.gender} · {item.time}</AppText>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  request: {
    padding: 20,
    marginBottom: 15,
  },
  requestStatus: {
   marginRight: 20,
   height: 100,
    overflow: 'hidden',
  },
});

export default ListItem;
