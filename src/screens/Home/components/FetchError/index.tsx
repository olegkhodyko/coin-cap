import React, { FC } from 'react';
import { Ui } from '@components';
import { FetchErrorProps } from '@screens/Home/types';
import { View } from 'react-native';
import styles from './styles';

const FetchError: FC<FetchErrorProps> = ({ message }) => (
  <View style={styles.container}>
    <Ui.Text color="error">Error: {message}</Ui.Text>
  </View>
);

export default FetchError;
