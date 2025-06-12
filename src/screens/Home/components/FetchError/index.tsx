import React, { FC } from 'react';
import { Text } from 'react-native';

interface FetchErrorProps {
  message: string;
}

const FetchError: FC<FetchErrorProps> = ({ message }) => (
  <Text>Error: {message}</Text>
);
    
export default FetchError;
