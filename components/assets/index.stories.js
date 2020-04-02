import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo } from './index';

const stories = storiesOf('Assets', module);

stories
  .add('logo', () => (
    <Logo />
  ));
