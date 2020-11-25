import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Widget1 from '../Components/Widget1';
import Widget4 from '../Components/Widget4';

export default {
  title: 'Widget',
};

export const calendar = () => <Widget1/>;

export const deezer = () => (
  <Widget4/>
);
