import React, { FC } from 'react';
import { Ui } from '@components';
import { FetchErrorProps } from '@screens/Home/types';

const FetchError: FC<FetchErrorProps> = ({ message }) => (
  <Ui.Text color="error">Error: {message}</Ui.Text>
);

export default FetchError;
