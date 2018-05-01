import React from 'react';
import { List, ListItem } from 'react-native-elements';
import styles from './SettingsScreenStyles';

const SettingsScreen = ({ resetData }) =>
  <List>
    <ListItem titleStyle={ styles.reset } title="Reset application data" hideChevron onPress={ resetData } />
  </List>;

export default SettingsScreen;
